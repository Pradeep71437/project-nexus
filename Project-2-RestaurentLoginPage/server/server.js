const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const User = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const mongoURI =
  "mongodb://210701149:mgamar123@ac-tea3fkp-shard-00-00.7xnkouf.mongodb.net:27017,ac-tea3fkp-shard-00-01.7xnkouf.mongodb.net:27017,ac-tea3fkp-shard-00-02.7xnkouf.mongodb.net:27017/?ssl=true&replicaSet=atlas-pwgi2w-shard-0&authSource=admin&retryWrites=true&w=majority";
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
    const { name, email, uid } = req.body;

    // Check if a user with the same email or UID already exists
    const user = await client.db("contacts").collection("users").findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user document
    const newUser = { name, email, uid };
    const result = await client.db("contacts").collection("users").insertOne(newUser);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get('/username/:uid', async (req, res) => {
  try {
    const uid = req.params.uid;
    const user = await client.db("contacts").collection("users").findOne({ uid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ name: user.name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post("/add", async (req, res) => {
  const { uid, firstname, lastname, email, phone, dateofbirth, group } = req.body;
  console.log(req.body);

  try {
    // Create a new contact document
    const newContact = {
      uid,
      firstname,
      lastname,
      email,
      phone,
      dateofbirth,
      group,
    };

    const result = await client.db("contacts").collection("contacts").insertOne(newContact);

    res.json("contact added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get('/contacts/:userUid', async (req, res) => {
  try {
    const userUid = req.params.userUid;
    const contacts = await client.db("contacts").collection("contacts").find({ uid: userUid }).toArray();

    res.json({ contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete("/contacts/:id", async (req, res) => {
  const contactId = req.params.id;

  try {
    const result = await client.db("contacts").collection("contacts").deleteOne({ _id: new ObjectId(contactId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/update/:contactid", async (req, res) => {
  try {
    const contactid = req.params.contactid;
    console.log(contactid);
    const contacts = await client.db("contacts").collection("contacts").find({ _id: new ObjectId(contactid) }).toArray();
    // console.log(contacts);
    res.status(200).json({ contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put("/updatecontact/:id", async (req, res) => {
  const contactId = req.params.id;
  const { uid, firstname, lastname, email, phone, dateofbirth, group } = req.body; // The updated contact data

  try {
    const updateContact = {
      uid,
      firstname,
      lastname,
      email,
      phone,
      dateofbirth,
      group,
    };

    console.log(updateContact);
    await client.connect();
    const database = client.db("contacts");
    const contactsCollection = database.collection("contacts");

    const result = await contactsCollection.updateOne(
      { _id: new ObjectId(contactId) }, // Filter by the contact's ID
      { $set: updateContact } // Update with the new contact data
    );

    if (result.matchedCount === 1) {
      res.status(200).json({ message: "Contact updated successfully" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  } finally {
    await client.close();
  }
});

