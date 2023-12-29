const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute=require("./routes/users.js");
const authRoute=require("./routes/auth.js")
const postRoute=require("./routes/posts.js")

dotenv.config();

// middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

mongoose.connect("mongodb+srv://LamaSocialMedia:LamaSocialMedia@lamasocialmedia.bkyohel.mongodb.net/LamaSocialMedia?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8800, () => {
      console.log('Backend server is running!');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


