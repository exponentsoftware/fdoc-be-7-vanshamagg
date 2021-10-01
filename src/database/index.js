const { Sequelize } = require('sequelize');
const Todo = require('./models/todo.model');
const User = require('./models/user.mode');

const DATABASE_URI = process.env.DATABASE_URI;

const sequelize = new Sequelize(DATABASE_URI, {
  // logging: console.log,
  ssl: true
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the Db Established');

    await sequelize.sync({
      force: true 
    });
    console.log('All models synchronized');
  } catch (err) {
    console.log(`ERROR : ${ err.message }`);
  }
})();


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = Todo(sequelize, Sequelize);
db.User = User(sequelize, Sequelize);

db.User.hasMany(db.Todo, { onDelete: 'cascade' });
db.Todo.belongsTo(db.User);

module.exports = db;

