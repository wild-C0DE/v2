const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Equipment = new Schema({
  nameOfEquipment: {
    type: String,
  //  required: true,
  },

  reference: {
    type: String,
  //  required: true,
  },
  quantity: {
    type: Number,
   // required: true,
  },

  state: {
    type: String,
    
  },
  brand: {
    type: String,
    // required: true,
  },
  supplierName: {
    type: String,
    // required: true,
  },
  supplierContact: {
    type: String,
    // required: true,
  },
 
  dateOfUse: {
    type: Date,
    required: false,
  },
  isbn: {
    type: String,
    // required: true,
  },
  department: {
    type: String,
    // required: true,
  },
  cost: {
    type: Number,
  },
 
});

// Model
const EquipmentList = mongoose.model("EquipmentList", Equipment);

module.exports = EquipmentList;
