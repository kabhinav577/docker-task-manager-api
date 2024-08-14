const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user.model');

const Task = sequelize.define(
  'Task',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Todo', 'In Progress', 'Done'),
      defaultValue: 'Todo',
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'),
      defaultValue: 'Medium',
    },
    due_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;
