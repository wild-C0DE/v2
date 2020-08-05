const express = require("express");
const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");
const Workers = require("../../models/workers/worker");

router.post("/", async (req, res) => {
  try {
    const data = await Workers.findOne({ agentName: req.body.agentName });
    req.body.agentId = data.id;
    WorkOrder.create(req.body);
    res.status(201).send({
      msg: "data saved succefully",
    });
  } catch (error) {
    res.status(404).send({
      msg: "not found",
    });
  }

  // Workers.findOne({agentName:req.body.agentName})
  //  .then((data) => {
  //   //  console.log(data)
  //   id = data["_id"]
  //   //  console.log(id)
  // })
  //  .catch((error) => {
  //   console.log("error", error);
  // });
  // req.body.agentId = id;
  // console.log(id)

  // var small = new WorkOrder(req.body);
  // small.save((error) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(500).json({
  //       msg: "server error",
  //     });
  //   } else {
  //     res.json({
  //       msg: "data saved succefully",
  //     });
  //   }
  // });
});

module.exports = router;
