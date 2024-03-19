const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@testmongo.zwk8zgm.mongodb.net/socila-network"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("FaileD to connecte to MongoDB", err));
