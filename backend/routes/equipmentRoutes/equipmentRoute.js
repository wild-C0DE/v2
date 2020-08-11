const express = require("express");
const router = express.Router();

const EquipmentList = require("../../models/equipment/equipment");

router.post("/",(req,res)=>{
 console.log(req.body)
  //req.body.dateOfUse = Date.parse(req.body.dateOfUse)
  console.log(req.body.dateOfUse)
  var newEquipmentList = new EquipmentList(req.body);
   newEquipmentList.save((error) => {
    if (error) {
      console.log('date: ', typeof req.body.dateOfUse );
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