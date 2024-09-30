const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const mongoURI =
  "mongodb://pradeep:pradeep189@cluster0-shard-00-00.3b3fe.mongodb.net:27017,cluster0-shard-00-01.3b3fe.mongodb.net:27017,cluster0-shard-00-02.3b3fe.mongodb.net:27017/?ssl=true&replicaSet=atlas-izhivo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect()
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/signup", async (req, res) => {
  try {
    const {email, password } = req.body;
console.log(email,password);
    // Check if a user with the same email or UID already exists
    const user = await client.db("restaurant").collection("users").findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user document
    const newUser = {  email, password };
    const result = await client.db("restaurant").collection("users").insertOne(newUser);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
  
      // Find the user with the given email
      const user = await client.db("restaurant").collection("users").findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password" });
      }
  
      // User found and password matches, you can generate a token or session here
      res.json({ message: "Login successful", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  
