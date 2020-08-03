const express = require("express");

const router = express.Router();

const AssignedEquipmentList = require("../../models/equipment/assignedEquipment");



router.get("/", (req, res) => {

  AssignedEquipmentList.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
