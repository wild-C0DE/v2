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
});

module.exports = router;
