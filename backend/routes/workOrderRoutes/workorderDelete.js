const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");



router.post("/", (req, res) => {
 const data = req.body.nameOfTheIntervention
 console.log(data)
 WorkOrder.findOneAndDelete({nameOfTheIntervention: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
