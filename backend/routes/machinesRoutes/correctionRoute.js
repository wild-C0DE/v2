const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");



router.get("/", (req, res) => {

    WorkOrder.find({typeOfIntervention: "Correction", state: "Enqueue"})
    .then((data) => {
      var result = 0;
      for(var i = 0; i< data.length; i++) {
        result = result + data[i]["duration"]
      }
      console.log(result)
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});
module.exports = router;
