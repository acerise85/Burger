//require connection.js

let connection = require("./connection.js");


let orm = {

    //select All
    all: function (callBack) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            callBack(result);
        });
    },
     //create burger
     create: function (burger, callBack) {
         console.log(burger);
         
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES ('${burger}', false)`, function (err, result) {
            if (err) throw err;
            callBack(result);
        });
    },

    put: function (id, callBack){
        connection.query('UPDATE id SET condition = "false" WHERE condition = "true"', function(err,result){
            console.log(id);
            if (err) throw err;
            callBack(result);
        })

    }
}    

//export to ORM
module.exports = orm;