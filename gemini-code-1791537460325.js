import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import documentRoutes from './routes/documentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/documents', documentRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'LegalEase API' });
});

app.listen(PORT, () => {
  console.log(`LegalEase Server running on port ${PORT}`);
});