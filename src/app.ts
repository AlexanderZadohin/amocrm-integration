import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes';
import dealRoutes from './routes/dealRoutes';
import webhookRoutes from './routes/webhookRoutes';

dotenv.config();

const app = express(); 

app.use(express.json()); 

app.use('/api', contactRoutes);
app.use('/api', dealRoutes);
app.use('/api', webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
