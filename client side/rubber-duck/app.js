const http = require('http');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Close MongoDb connection when the Node.js process is terminated
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
    }
});    


// Define Mongoose schema and model
const rubberDuckSchema= new mongoose.Schema({
    message: String
}, {collection: 'rubberDuckMessages'});

const RubberDuckMessages = mongoose.model('RubberDuckMessages', rubberDuckSchema);


// Define endpoint to fetch data from travelDestinations collection
// Create HTTP server
const server = http.createServer((req, res) => {
    

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/messages') {
        if (req.method === 'GET') {
            RubberDuckMessages.find()
            .then((rubberDuckMessages) => {
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(rubberDuckMessages));
            })
            .catch((error) => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
            });
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
            body += chunk;
            console.log(body);
            
            });
            req.on('end', () => {
            const { message } = JSON.parse(body);
            const newRubberDuckMessage = new RubberDuckMessages({ message });
            newRubberDuckMessage.save()
                .then(() => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');

                res.end(JSON.stringify({ message: 'Message created successfully' }));
                })
                .catch((error) => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
                });
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Not Found' }));
        }
    } else if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('RubberDuckMessages API');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Not Found' }));
    }

    
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});