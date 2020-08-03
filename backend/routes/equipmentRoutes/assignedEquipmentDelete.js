const express = require("express");

const router = express.Router();

const AssignedEquipmentList = require("../../models/equipment/assignedEquipment");



router.post("/", (req, res) => {
 const data = req.body.reference
 console.log(data)
 AssignedEquipmentList.findOneAndDelete({reference: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;