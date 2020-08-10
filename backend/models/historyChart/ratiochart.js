const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Ratio = new Schema({
  date: {
    type: String,
    // required: true,
  },
  ratio1: {
    type: Number,
    // required: true,
  },
  ratio2: {
    type: Number,
  },

  ratio3: {
    type: Number,
  },
  ratio4: {
    type: Number,
  },
});

// Model
const RatioTable = mongoose.model("RatioTable", Ratio);

module.exports = RatioTable;
