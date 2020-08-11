const express = require("express");

const router = express.Router();

const ProjectsList = require("../../models/projects/projects")
const WorkOrder = require("../../models/work-order/work-order");
router.get('/', (req, res) => {
     ProjectsList.find({}).then(result => {
         const helper = result
        WorkOrder.aggregate([
            // {$match :{}},
            {$group: {_id: "$machine", stopTime: {$sum:"$duration"}, same_machine :{$sum:1}}},
            
          ]).then(result => {
              let total = []
              for(let i = 0;i<result.length;i++ ){
                // console.log(result[i].stopTime)
                  for(let j = 0 ; j<helper.length;j++){
                     // console.log(result[i]._id)
                    //  for (var k = 0; k < newResult.length; k++){
                     if(result[i]._id===helper[j].machine){
                          helper[j]["runTime"] = helper[j].plannedProdTime - result[i].stopTime
                          total.push(helper[j]) 
                          }
                    //   }
                  }
              }
              
              return total

          })
        //   .then(result => {
        //     //   console.log(result)
        //          for(var i =0;i<result.length;i++){
        //              result[i]["goodPartsProduced"] = result[i].goodPartsProduced
        //          }
        //      return result
        //   })
          .then(result => {
            for (var i = 0; i < result.length; i++){
                result[i]["plannedProdTime"] = ((result[i].idealCycleTime * result[i].goodPartsProduced) / result[i].runTime).toFixed(2)
            }
            return result
            }).then(result => {
                // console.log(result)
                res.send(result)
            })
        })
    })


module.exports = router;
