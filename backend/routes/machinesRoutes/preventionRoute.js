const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");



router.get("/", (req, res) => {
 console.log(req.body)
    WorkOrder.find({typeOfIntervention: "Prevention", state: "Enqueue"})
    .then((data) => {

      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});
module.exports = router;