require("rootpath")();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require("config");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const uri = process.env.URI;


const PORT = process.env.PORT || 8080;
const app = express();
const AutoIncrementFactory = require("mongoose-sequence");
const nodemailer = require("nodemailer");
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());
// use JWT auth to secure the api

 // app.use(jwt());


// api routes
app.use("/users", require("./users/users.controller"));




const stock = require('./routes/stock')

//machines routes
const addMachine = require("./routes/machinesRoutes/machinesRoute");
const machineList = require("./routes/machinesRoutes/machinListRoute");
const deleteMachin = require("./routes/machinesRoutes/machineDeleteRoute");
const updateMachin = require("./routes/machinesRoutes/machineUpdateRoute");
const correctionList = require("./routes/machinesRoutes/correctionRoute")
const preventionList = require("./routes/machinesRoutes/preventionRoute")

// work order routes
const deleteWorkoreder = require("./routes/workOrderRoutes/workorderDelete");
const workOrder = require("./routes/workOrderRoutes/work-order");
const workorderList = require("./routes/workOrderRoutes/work-orderList");

//equipment routes
const addEquipment = require("./routes/equipmentRoutes/equipmentRoute");
const equipmentList = require("./routes/equipmentRoutes/equipmentListRoute");
const deleteEquipment = require("./routes/equipmentRoutes/equipmentDeleteRoute");
const updateEquipment = require("./routes/equipmentRoutes/equipmentUpdateRoute");

const assignedEquipmentList = require("./routes/equipmentRoutes/assignEquipmentListRoutes");
const addAssignedEquipment = require("./routes/equipmentRoutes/assignedEquipmentRoutes");
const deleteAssignedEquipment = require("./routes/equipmentRoutes/assignedEquipmentDelete");
const updateAssignedEquipment = require("./routes/equipmentRoutes/assignedEquipmentUpdateRoutes");

// synthesis routes
const synthesis = require("./routes/machinesRoutes/synthesisRoute")

// workers routes
const workerDelete = require("./routes/workers/workersDeleteRoutes")
const workerUpdate = require("./routes/workers/workerUpdateRoute")
const workersList = require("./routes/workers/workersListRoute")
const workerAdd = require("./routes/workers/workerAddRoute")

// interventions History
const interventionsHistory = require("./routes/interventions History/interventiionsRoute")
const ratioTable = require("./routes/ratios table/ratioTableRoute")

//ratio table



//MTTR routes
const mttr = require("./routes/mttrRoutes/mttrRouter")

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

//.........Use routes...............






// stock path
app.use('/stock', stock)



// work order path
app.use("/api/workOrder", workOrder);
app.use("/api/workorderList", workorderList);
app.use("/api/deleteWorkorder",deleteWorkoreder)

// machine path
app.use("/api/machineList", machineList);
app.use("/api/addmachine", addMachine);
app.use("/api/deleteMachin", deleteMachin);
app.use("/api/updateMachin", updateMachin);
app.use("/api/synthesis", synthesis);
app.use("/api/correctionList", correctionList);
app.use("/api/preventionList", preventionList);

// equipment path
app.use("/api/addequipment", addEquipment);
app.use("/api/equipmentList", equipmentList);
app.use("/api/deleteEquipment", deleteEquipment);
app.use("/api/updateEquipment", updateEquipment);

app.use("/api/assignList", assignedEquipmentList);
app.use("/api/assignEquipment", addAssignedEquipment);
app.use("/api/deleteAssignedEquipment", deleteAssignedEquipment);
app.use("/api/updateAssignedEquipment", updateAssignedEquipment);



// workers path 
app.use("/api/workersList", workersList);
app.use("/api/workerDelete", workerDelete);
app.use("/api/workerUpdate", workerUpdate )
app.use("/api/workerAdd", workerAdd )

//Inteventions history route 
app.use("/api/interventionsHistory", interventionsHistory);

//Ratio table 
app.use("/api/ratioTable", ratioTable )

//MTTR path
app.use("/api/mttr", mttr);





//email 
// app.post('/send', function (req, res) {
//   var data=req.body;

//   var smtpTransport = nodemailer.createTransport("SMTP",{
//      service: "Gmail", 
//      auth: {
//      user: "osa.bank.test@gmail.com",
//      pass: "oussemasiwarahmed"
//      }});

//  smtpTransport.sendMail({  //email options
//  from: data.email1,
//  to: data.email2, // receiver
//  subject: data.subject, // subject
//  html: data.content // body (var data which we've declared)
//   }, function(error, response){  //callback
//        if(error){
//          console.log(error);
//       }else{
//          console.log("Message sent: " + res.message);
//      }

//  smtpTransport.close(); 
//   }); });



app.listen(PORT, console.log(`server is running on port ${PORT}`));
