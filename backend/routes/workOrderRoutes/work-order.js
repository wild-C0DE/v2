const express = require("express");
const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.post("/",(req,res)=>{
 
  // WorkOrder.findOne({}, {}, { sort: { 'created_at' : -1 } }, (err, post) =>{
  //   const obj = post
  //   if(err){
  //     console.log(err)
  //   }
    
  // });

  var small = new WorkOrder(req.body);
   small.save((error) => {
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