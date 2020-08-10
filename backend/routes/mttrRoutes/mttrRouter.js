const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.get('/', (req, res) => {
WorkOrder.aggregate([
    {$match :{}},
    {$group: {_id: "$machine", totalMaintenanceTime: {$sum:"$duration"}, same_machine :{$sum:1}}},
    {$sort : {totalMaintenanceTime: -1}}
    
  ]).then(result => {
    for(var i = 0;i<result.length;i++){
      result[i]["MTTR"] = result[i].totalMaintenanceTime / result[i].same_machine
    }
    
    return result
  }  ).then(result => res.send(result))
})

module.exports = router;
