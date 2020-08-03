const express = require("express");
const router = express.Router();

const AssignedEquipmentList = require("../../models/equipment/assignedEquipment");

router.post("/",(req,res)=>{

  var newAssignedEquipmentList = new AssignedEquipmentList(req.body);
   newAssignedEquipmentList.save((error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "server error",
      });
    } else {
      res.json({
        msg: "data saved succefully",
      });
    }
  });

})


module.exports = router