require("rootpath")();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require("config");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const uri = process.env.URI;
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");
const PORT = process.env.PORT || 8080;
const app = express();
const AutoIncrementFactory = require("mongoose-sequence");

// require('dotenv').config()
// set a bunch of http headers on the site and secure them prevent click jacking
app.use(helmet());
const db = config.get("MONGO_URI");

//middlewares
app.use(cors());

//authentication siwar don't touch
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

// api routes
app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

// end of siwa's auth

const authRoute = require("./routes/auth.js");
const workOrder = require("./routes/workOrderRoutes/work-order");
const addMachine = require("./routes/machinesRoutes/machinesRoute");
const machineList = require("./routes/machinesRoutes/machinListRoute");
const workorderList = require("./routes/workOrderRoutes/work-orderList");
const deleteMachin = require("./routes/machinesRoutes/machineDeleteRoute");

//************************************ */
// ************mongod DB*************
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});
const AutoIncrement = AutoIncrementFactory(connection);

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//********************* */
//*******routes******** */

app.use(morgan("tiny"));
//Use routes
app.use("/api/addmachine", addMachine);
app.use("/api/workOrder", workOrder);
app.use("/api/machineList", machineList);
app.use("/api/workorderList", workorderList);
app.use("/api/deleteMachin", deleteMachin);
app.listen(PORT, console.log(`server is running on port ${PORT}`));
