const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app and middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00.3b3fe.mongodb.net:27017,cluster0-shard-00-01.3b3fe.mongodb.net:27017,cluster0-shard-00-02.3b3fe.mongodb.net:27017/?ssl=true&replicaSet=atlas-izhivo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0' , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  thoughts: String,
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// API route to submit feedback
app.post('/api/feedback', async (req, res) => {
  const { name, email, thoughts } = req.body;

  try {
    const feedback = new Feedback({ name, email, thoughts });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// API route to retrieve feedback (for admin)
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
