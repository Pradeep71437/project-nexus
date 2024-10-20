// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://newadmin:admin123@cluster0-shard-00-00.3b3fe.mongodb.net:27017,cluster0-shard-00-01.3b3fe.mongodb.net:27017,cluster0-shard-00-02.3b3fe.mongodb.net:27017/feedbackDB?ssl=true&replicaSet=atlas-izhivo-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));

// Define a Feedback model
const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: { type: String, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema, 'feedbacks'); // Model name should be singular

app.post("/api/feedback", async (req, res) => {
    const { name, email, thoughts } = req.body;
    console.log(req.body);
  
    try {
        // Create a new feedback document
        const newFeed = new Feedback({ // Corrected the model reference here
            name,
            email,
            thoughts,
        });
  
        const result = await newFeed.save(); // Save the feedback to the database
       console.log(result);
        res.json("Feedback added successfully");
    } catch (error) {
        console.error("Error adding feedback:", error);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.get('/api/details', async (req, res) => {
    try {
      // Fetch all feedbacks from the "feedbacks" collection
      const feedbacks2 = await Feedback.find();
      console.log('Fetched feedbacks:', feedbacks2);
      res.json({ feedbacks2 }); // Ensure the response is structured correctly
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

// Start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
