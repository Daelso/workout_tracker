const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Will one day allow for deployment, or it defaults to local host.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/homeroutes")); //points to our homeroutes/html pages
app.use(require("./routes/api")); //points to our new api routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});