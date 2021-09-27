var express = require('express');
var router = express.Router();
const DBconnect = require("../DBconnect");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/Fail",function(req,res){
  res.status(404).send("Fail !!")
})

router.get('/company',function(req,res){
  const sql = "SELECT * FROM COMPANY";
  DBconnect.query(sql)
    .then(data=>{
      res.send(data)
    })
})

module.exports = router;
