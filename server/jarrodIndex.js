// const path = require("path")

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 


const ctrl = require('./jarrodController.js')

app.get(`/api/jarrodSoloEntry`, ctrl.getJarrodSoloEntry)
app.post(`/api/jarrodSoloEntry`, ctrl.createJarrodSoloEntry)
app.delete(`/api/jarrodSoloEntry/:id`, ctrl.deleteJarrodSoloEntry)

const ctrlTwo = require('./royalController.js')

app.get(`/api/royalSoloEntry`, ctrlTwo.getRoyalSoloEntry)
app.post(`/api/royalSoloEntry`, ctrlTwo.createRoyalSoloEntry)
app.delete(`/api/royalSoloEntry/:id`, ctrlTwo.deleteRoyalSoloEntry)





app.listen(4400, () => console.log("Commencing countdown, engines on...4400"));

