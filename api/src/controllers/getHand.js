const { Hand } = require("../db");

const getHandDb = async () => {
  let hands = await Hand.findAll();
  return hands;
};

module.exports = {
  getHandDb,
};