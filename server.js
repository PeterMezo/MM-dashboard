import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('public')); // Ensure your static files are in 'public'

// Use the PORT environment variable or default to 3000 for local development
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server set up on port ${PORT}...`);
});
