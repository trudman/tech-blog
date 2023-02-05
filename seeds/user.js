const { User } = require("../models");

const userData = [
  {
    name: "Tyler",
    email: "tyler.rudman@gmail.com",
    password: "password1",
  },
  {
    name: "Bruce",
    email: "bruce@gmail.com",
    password: "password1",
  },
  {
    name: "Meloney",
    email: "mel@gmail.com",
    password: "password1",
  },
  {
    name: "Troy",
    email: "troy@gmail.com",
    password: "password1",
  },
  {
    name: "Eric",
    email: "eric@gmail.com",
    password: "password1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
