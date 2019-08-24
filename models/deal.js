const mongoose = require("mongoose");
const { Schema } = mongoose;

const dealSchema = new Schema({
  name: { type: String, required: true },
  business: { type: String, required: true },
  category: { type: String, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
  golivedate: { type: Date, required: true },
  timezone: { type: String, default: "-0600" },
  status: { type: String, required: true },
  deal: { type: String, required: true },
  location: { type: String, required: true },
  photo: { type: String },
  updated: { type: Date, default: Date.now }
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
