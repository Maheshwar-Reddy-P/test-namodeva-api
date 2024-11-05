import express from 'express';
import serverless from 'serverless-http';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get('/login', (req, res) => {
    res.send('User logged in Successfully!');
});

app.get('/welcome', (req, res) => {
    res.send('Welcome to AWS Lambda Function From GitHub!');
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}...`);
});

// Export the handler for AWS Lambda
export const handler = serverless(app);
