const { User } = require("../models");

const userData = [
  {
    username: "Tyler8",
    email: "tyler.rudman@gmail.com",
    password: "password1",
  },
  {
    username: "Bruce59",
    email: "bruce@gmail.com",
    password: "password1",
  },
  {
    username: "Meloney60",
    email: "mel@gmail.com",
    password: "password1",
  },
  {
    username: "Troy77",
    email: "troy@gmail.com",
    password: "password1",
  },
  {
    username: "Eric1",
    email: "eric@gmail.com",
    password: "password1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
