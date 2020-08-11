const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.get("/", (req, res) => {
    WorkOrder.find({state: "Completed"})
      .populate("agentId")
      .then((data) => {
        // for(var i = 0; i < data.length; i++){
        // result = data[i]["numberOrder"];
        // }
        // console.log(result)
        res.send(data)    
  
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  module.exports = router;