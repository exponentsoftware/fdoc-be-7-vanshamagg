const { User } = require('../database');


// create User
async function createUser(req, res) {
  try {
    const { name, email, username, phone, password } = req.body;

    const user = await User.create({
      name,
      email,
      username,
      phone,
      password
    });

    res.status(201).json(user);

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

module.exports = { createUser};