const express = require("express");

const router = express.Router();

const EquipmentList = require("../../models/equipment/equipment");



router.post("/", (req, res) => {
 const data = req.body.reference
 console.log(data)
  EquipmentList.findOneAndDelete({reference: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;