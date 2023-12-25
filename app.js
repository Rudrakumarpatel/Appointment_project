const express = require("express");
const app = express();
let PORT = 5000;
const path = require('path');

const sendMail = require("./controllers/sendmail");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/Home.html'));
})

app.get("/mail", sendMail)
{

}

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no ${PORT}`);
    })
  }
  catch (error) {
    console.log(error);
  }
}
start();