const express = require("express");

const router = express.Router();

const MachineList = require("../../models/machines/machine");



router.get("/", (req, res) => {

  MachineList.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
