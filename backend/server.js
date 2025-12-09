const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require('cors')

const allowedOrigins = [
  "http://localhost:5173",
  "https://gleeful-unicorn-c80f79.netlify.app"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. server→server, curl, Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"), false);
  },
  credentials: true
}));



const port = process.env.PORT || 3000;
app.use(bodyparser.json());
// app.use(cors())

// const url = "mongodb://localhost:27017";
const client = new MongoClient(process.env.MONGO_URI);

// Database Name
const dbName = "passhh";

try {
  client.connect();
} catch (error) {
  console.log(error)
}

//Get All passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ Success: true });
});

//Delete a password
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ Success: true,result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
