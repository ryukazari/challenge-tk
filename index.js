const express = require("express");
const app = express();
const port = "3000";

const indexController = require('./src/controllers/index');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/getMaxArea", indexController.getMaxAreaController)
app.post("/equalizeTeamSize", indexController.equalizeTeamSize)

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});