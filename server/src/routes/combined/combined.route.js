const express = require("express");

const Cars = require("../cars/car.model");
const Bike = require("../bikes/bike.model");
const Mobile = require("../mobiles/mobile.model");
const Laptop = require("../laptops/laptop.model");
const House = require("../houses/house.model");

const app = express.Router();

app.get("/", async (request, response) => {
  const { limit = 2 } = request.query;
  try {
    const cars = await Cars.find({}).limit(limit);
    const mobiles = await Mobile.find({}).limit(limit);
    const bikes = await Bike.find({}).limit(limit);
    const laptops = await Laptop.find({}).limit(limit);
    const houses = await House.find({}).limit(limit);

    let combined = [...cars, ...mobiles, ...houses, ...laptops, ...bikes];

    let currentIndex = combined.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [combined[currentIndex], combined[randomIndex]] = [combined[randomIndex],combined[currentIndex],];
    }

    response.send(combined);
  } catch ({ message }) {
    response.send(message);
  }
});

module.exports = app;
