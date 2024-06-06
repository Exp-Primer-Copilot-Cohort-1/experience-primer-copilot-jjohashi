// Create web server
// Import express module
const express = require('express');

// Create web server
const app = express();

// Create router
const commentsRouter = express.Router();

// Middleware
commentsRouter.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// GET /comments/
commentsRouter.get('/', (req, res) => {
    res.send('GET /comments/');
});

// POST /comments/
commentsRouter.post('/', (req, res) => {
    res.send('POST /comments/');
});

// PUT /comments/
commentsRouter.put('/', (req, res) => {
    res.send('PUT /comments/');
});

// DELETE /comments/
commentsRouter.delete('/', (req, res) => {
    res.send('DELETE /comments/');
});

// Export router
module.exports = commentsRouter;

// Path: index.js
// Create web server
// Import express module
const express = require('express');

// Create web server
const app = express();

// Import commentsRouter
const commentsRouter = require('./comments');

// Mount router
app.use('/comments', commentsRouter);

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});