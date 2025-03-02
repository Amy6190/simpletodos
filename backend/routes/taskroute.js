const express = require("express");
const router = express.Router();
const Task = require("../models/taskmodel");

router.get("/", async (req, res) => {
  const task = await Task.find();
  res.json(task);
});

router.post("/", async (req, res) => {
  try {
    const addTask = new Task({
      text: req.body.text,
    });
    await addTask.save();
    res.json(addTask);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        completed: req.body.completed,
      },
      { new: true }
    );
    console.log(updateTask);
    
    res.json(updateTask);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id",async (req,res)=>{
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id, {new:true})
        res.json({ message: "Task deleted" });
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
