const express = require("express");

const router = express.Router();

const WorkersList = require("../../models/workers/worker");



router.get("/", (req, res) => {

  WorkersList.find({})
  .then((data) => {
  let array = []
  for(let i = 0 ; i<data.length;i++){
    array.push(data[i].agentName)
  }	
  res.json(array)
    })
    .catch((error) => {
      console.log("error", error);
    });

  })


module.exports = router;
