const express = require("express");
const app = express();
const morgan = require("morgan");
const { connect } = require("./config");
const port = 5000;

const connection = require("./config");

const todosRouter = require("./routes/todos.route.js");

app.use(morgan("dev"));
app.use(express.json());

app.use("/todos", todosRouter);

connection.connect((err) => {
  if (err) {
    console.error("MySQL: error connecting:\n", err.stack);
    return;
  }
  console.log("MySQL: connected as id " + connection.threadId);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is listening at ${port}`);
});
