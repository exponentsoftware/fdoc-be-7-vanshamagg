const { Todo, User } = require('../database');

async function createTodo(req, res) {
  try {
    const { title, author, completed, category, userId } = req.body;


    // const user = await User.findOne({ where: { id : userId } });
    // console.log(user)
    // const todo = await user.createTodo({
    //   title,
    //   author,
    //   completed,
    //   category
    // })

    const todo = await Todo.create({
      title,
      author,
      completed,
      category,
      userId
    });
    
    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
module.exports = { createTodo };