const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

//*********Schema******** */
const Schema = mongoose.Schema;
const Work = new Schema({
  numberOrder: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  nameOfTheIntervention: {
    type: String,
    // required: true,
  },
  typeOfIntervention: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: false,
  },

  machine: {
    type: String,
    // required: true,
  },
  manager: {
    type: String,
    // required: true,
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkerList",
  },
  agentName:  {
    type: String,
    // required: true,
  },
  department: {
    type: String,
    // required: true,
  },
  duration: {
    type: Number,
    // required: true,
  },
  equipmentUsed: {
    type: String,
    // required: true,
  },
  effectiveDuration: {
    type: String,
    // required: true,
  }
});

Work.plugin(AutoIncrement, { inc_field: "numberOrder" });

// Model
const WorkOrder = mongoose.model("WorkOrder", Work);
module.exports = WorkOrder;
