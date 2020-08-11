const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");
const MachineList = require("../../models/machines/machine")



router.get('/', (req, res) => {
  MachineList.aggregate([
    
    {
      $lookup:
      {
        from: WorkOrder.collection.name,
        localField: "name",
        foreignField: "machine",
        as: "mtbf_synthesis",
      },
    },

    // {$group: {_id: "$machine"}}
 ])
 .then(result => {
   let helper = []
  // console.log(result)
  for(let i =0;i<result.length;i++){
    if(result[i].mtbf_synthesis.length > 0){
      helper.push(result[i])
    }
  }
  
  return helper;
}).then(result => {
  console.log(result)
  for (var i = 0; i < result.length; i++){
    for (var key in result[i]){
      result[i]["totalOperationalTime"] = (result[i]["operationalDays"] * result[i]["oprationalTimePerDay"])
   }
  }
  return result
}).then(result =>{
  let helper  = result
  let haddna = []
  WorkOrder.aggregate([
    
    
    {$group: {_id: "$machine",  same_machine :{$sum:1}}},

    // {$group: {_id: "$machine"}}
 ]).then(
   result => {
    haddna = result
    let  hamza = haddna.concat(helper)
    myFriend = []
     for(var i = 0;i<hamza.length;i++){
       
       for(var j = i+1 ;j<hamza.length;j++){
        
        if(hamza[i]._id === hamza[j].name){
          
         hamza[j]["same_machine"] = hamza[i].same_machine 
         myFriend.push(hamza[j])
        }
       }
     }
     return myFriend
  }
 ).then(result => {
  for(var i = 0;i<result.length;i++){
    result[i]["MTBF"] = result[i].totalOperationalTime / result[i].same_machine
  } 
  return result
 }).then(result => res.send(result))
})
  })

module.exports = router;
