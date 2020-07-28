const express = require("express");

const router = express.Router();

const EquipmentList = require("../../models/equipment/equipment");



router.get("/", (req, res) => {

  EquipmentList.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
