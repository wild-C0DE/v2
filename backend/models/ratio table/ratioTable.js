const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Ratio = new Schema({
  date: {
    type: String,
    // required: true,
  },
  ratio1: {
    type: String,
    // required: true,
  },
  ratio2: {
    type: String,
  },

  ratio3: {
    type: String,
  },
  ratio4: {
    type: String,
  },
});

// Model
const RatioTable = mongoose.model("RatioTable", Ratio);

module.exports = RatioTable;
