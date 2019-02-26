//file requires
let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");



//router
//main index
router.get("/", function(req, res){
    burger.all(function(data){
       console.log(data);
       res.render("index", {items: data}); 
    });
});
    //api of burgers
router.get("/api/burgers",function(req, res){
    burger.all(function(data){
        console.log(data);
        res.json(data) 
     });
})

//post api
router.post("/api/burgers", function(req, res){
    var item = req.body.burger
    burger.create(item, function(result){
        res.json(result);
    });
});

//update api
router.put("/api/burgers/:id", function(req, res){
    let id = req.params.id;
    console.log(id);
    


    
});

module.exports = router;