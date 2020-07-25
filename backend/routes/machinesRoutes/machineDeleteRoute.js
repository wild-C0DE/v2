const express = require("express");

const router = express.Router();

const MachineList = require("../../models/machines/machine");



router.post("/", (req, res) => {
 const data = req.body.reference
 console.log(data)
  MachineList.findOneAndDelete({reference: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
