//file requires
let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");
let burgers = require("../config/orm.js");


//router
//main index
router.get("/", function(req, res){
    burger.all(function(data){
        let burgObject = {
            burgers: data
        };
       console.log(burgObject);
       res.render("index", burgObject); 
    });
});

//post api
router.post("/api/burgers", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){

        res.json({id: result.id});
    });
});

router.get("/api/burgers", function(req, res){
    
        res.json(burgers);

});

//update api
router.put("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,function(result){
            if (result.rowsChanged === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;