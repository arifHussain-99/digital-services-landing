import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  
  // Here we would typically send an email or save to DB.
  console.log(`Received contact from ${name} (${email}):`);
  console.log(message);
  
  // Simulate network delay
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Backend API serving on http://localhost:${PORT}`);
});
