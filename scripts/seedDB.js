const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Deals collection and inserts the deals below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dealdb");

const dealSeed = [
  {
    name: "Future Deal",
    business: "Chipotle",
    category: "food",
    startdate: "2020-01-10 10:59:53.844Z",
    enddate: "2020-01-15 13:59:53.844Z",
    golivedate: "2020-01-15 10:59:53.844Z",
    timezone: "-0600",
    status: "Active",
    deal: "25 free burritos!",
    location: "123 Main St. Colorado Springs, CO 80920",
    photo: "https://farm4.staticflickr.com/3221/2343992051_88febbe3dc_z.jpg",
    updated: new Date(Date.now())
  },
  {
    name: "Past Deal",
    business: "Best Buy",
    category: "electronics",
    startdate: "2019-01-10 10:59:53.844Z",
    enddate: "2019-01-15 13:59:53.844Z",
    golivedate: "2019-01-15 10:59:53.844Z",
    timezone: "-0600",
    status: "Inactive",
    deal: "10 free 60 inch smart televisions",
    location: "555 1st St. Colorado Springs, CO 80918",
    photo: "https://images.techhive.com/images/idgnsImport/2013/09/id-2048252-p1010952-100052994-large.jpg",
    updated: new Date(Date.now())
  },
];

db.Deal
  .remove({})
  .then(() => db.Deal.collection.insertMany(dealSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
