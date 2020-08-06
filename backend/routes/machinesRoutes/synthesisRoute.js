const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");
const Workers = require("../../models/workers/worker");

router.get("/", (req, res) => {
  var result = 0;

  WorkOrder.find({ typeOfIntervention: "correction" })
    .populate("agentId")
    .then((data) => {
      let resultCorrection = 0;
      for (var i = 0; i < data.length; i++) {
        resultCorrection = resultCorrection + data[i]["duration"];
      }
      let resultCostCorrection = 0;
      for (let i = 0; i < data.length; i++) {
        console.log(data);
        resultCostCorrection =
          resultCostCorrection +
          data[i]["duration"] * data[i]["agentId"]["regularHourlyRate"];
      }

      // Workers.find({})

      WorkOrder.find({})
        .then((data) => {
          var resultTotal = 0;
          for (var i = 0; i < data.length; i++) {
            resultTotal = resultTotal + data[i]["duration"];
          }
          let resultRatio1 =
            Math.round((resultCorrection / resultTotal) * 100) + "%";

          WorkOrder.find({ typeOfIntervention: "prevention" })
            .populate("agentId")
            .then((data) => {
              var resultPrevention = 0;
              for (let i = 0; i < data.length; i++) {
                resultPrevention = resultPrevention + data[i]["duration"];
              }
              let resultRatio2 =
                Math.round((resultPrevention / resultTotal) * 100) + "%";

              let resultCostPrevention = 0;
              for (let i = 0; i < data.length; i++) {
                resultCostPrevention =
                  resultCostPrevention +
                  data[i]["duration"] * data[i]["agentId"]["regularHourlyRate"];
              }
              let resultCostTotal = resultCostPrevention + resultCostCorrection;
              let resultCostPreventionRatio =
                Math.round((resultCostPrevention / resultCostTotal) * 100) +
                "%";

              res.send([
                {
                  totalTime: resultTotal,
                  correctionTime: resultCorrection,
                  ratio1: resultRatio1,
                  ratio2: resultRatio2,
                  preventionTime: resultPrevention,
                  ratio3: resultCostPrevention,
                  ratio4: resultCostCorrection,
                  ratio5: resultCostTotal,
                  ratio6: resultCostPreventionRatio,
                },
              ]);
            })
            .catch((error) => {
              console.log("error", error);
            });
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
