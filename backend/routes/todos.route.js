const { response } = require("express");
const express = require("express");
const router = express.Router();
const connection = require("../config");

// GET http://localhost:5000/todos
// Get all todos
router.get("/", (req, res) => {
  connection.query("SELECT * FROM todos", (err, results) => {
    if (err) res.status(500).send({ message: err });
    res.status(200).json(results);
  });
});

// POST http://localhost:5000/todos
// create a new todo
router.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO todos SET ?", [formData], (err, results) => {
    if (err) res.status(500).send({ message: err });
    const newTodoId = results.insertId;
    connection.query(
      "SELECT * FROM todos WHERE id = ? ",
      [newTodoId],
      (error, results) => {
        if (error) res.status(500).send({ message: error });
        res.status(200).json(results);
      }
    );
  });
});

// PUT http://localhost:5000/todos/1
// edit todo by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  connection.query(
    "UPDATE todos SET ? WHERE id = ?",
    [formData, id],
    (err, results) => {
      if (err) res.status(500).send({ message: err });
      connection.query(
        "SELECT * FROM todos WHERE id = ? ",
        [id],
        (error, results) => {
          if (error) res.status(500).send({ message: error });
          res.status(200).json(results);
        }
      );
    }
  );
});

// DELETE http://localhost:5000/todos/1
// Delete todo by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM todos WHERE id = ?", [id], (err, results) => {
    if (err) res.status(500).send({ message: err });
    res.status(200).json({ message: "todo deleted successfully" });
  });
});

module.exports = router;
