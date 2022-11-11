const express = require("express");
const Cars = require("../cars/car.model");
const Bike = require("../bikes/bike.model");
const Mobile = require("../mobiles/mobile.model");
const Laptop = require("../laptops/laptop.model");
const House = require("../houses/house.model");

const app = express.Router();

app.get("/", async (request, response) => {
  const { limit } = request.query;
  try {
    const cars = await Cars.find({}).limit(limit);
    const mobiles = await Mobile.find({}).limit(limit);
    const bikes = await Bike.find({}).limit(limit);
    const laptops = await Laptop.find({}).limit(limit);
    const houses = await House.find({}).limit(limit);

    response.send([...cars, ...mobiles, ...houses, ...laptops, ...bikes]);
  } catch ({ message }) {
    response.send(message);
  }
});


module.exports = app;
