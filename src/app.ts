import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express(); 

app.use(express.json()); 

// Дальше твои роуты и остальной код...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
