const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");



router.get("/", (req, res) => {
 var result = 0
 
    WorkOrder.find({typeOfIntervention: "correction"})
    .then((data) => {
        
        for(var i = 0; i< data.length; i++) {
          result = result + data[i]["duration"]
        }
       
         WorkOrder.find({})
         .then(  (data) => {
             var result2 = 0;
             for(var i = 0; i< data.length; i++) {
               result2 = result2 + data[i]["duration"]
             }
            let   result3 = Math.round((result/result2)*100) + '%'
            
            
           res.send([{totalTime : result2,correctionTime : result,ratio:result3}])
         })
         .catch((error) => {
           console.log("error", error);
         });
        
     
    })
    .catch((error) => {
      console.log("error", error);
    });
   
});
module.exports = router;