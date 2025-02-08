import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './src/routes/chatRoutes.js';
import formRoutes from './src/routes/locationFormRoutes.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(chatRoutes);
app.use(formRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Sparkle API!');
    console.log('Welcome to the Sparkle API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});