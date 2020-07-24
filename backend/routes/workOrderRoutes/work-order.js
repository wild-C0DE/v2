const express = require("express");
const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.post("/",(req,res)=>{
 console.log(req.body)
  // WorkOrder.findOne({}, {}, { sort: { 'created_at' : -1 } }, (err, post) =>{
  //   const obj = post
  //   if(err){
  //     console.log(err)
  //   }
    
  // });

  var small = new WorkOrder(req.body);
   small.save(function (err) {
  if (err) console.log(err);
  
    console.log("saved")
    res.send("ok")
 
});

})


module.exports = router