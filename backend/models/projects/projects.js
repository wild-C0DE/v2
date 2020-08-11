const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Projects = new Schema({
    project: {
    type: String,
  //  required: true,
  },
  machine: {
    type: String,
    //required: true,
  },
  // runTime: {
  //   type: String,
  // },
  plannedProdTime: {
    type: Number,
  //  required: true,
  },
  idealCycleTime: {
    type: Number,
   // required: true,
  },

  goodPartsProduced: {
    type: Number,
    
  },
  totalPartsProduced: {
    type: Number,
    // required: true,
  },
 
});

// Model
const ProjectsList = mongoose.model("ProjectsList", Projects);

module.exports = ProjectsList;
