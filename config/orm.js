//require connection.js

let connection = require("./connection.js");

// //MySQL commands
function questionMarks(marks){
    let array = [];

    for (let i = 0; i <marks; i++){
        array.push("?");
    }
    return array.toString();
}

//convert object to key and value
function objSql(obj){
    let array = [];

    //loop through keys
    for (let key in obj){
        let val =obj[key];

        if (Object.hasOwnProperty.call(obj, key)){

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                val = " " + val + " ";
            }
            array.push(key + "=" + val);
        }
    }
    return array.toString();
}

let orm = {

    //select All
    all: function (inputTable, callBack) {
        let queryString = "SELECT * FROM burgers" ;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callBack(result);
    });
},
    
        //insert
        create: function(burgers, column, value, callBack) {
            let queryString = "INSERT INTO " + burgers;

            queryString += " (";
            queryString += column.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += questionMarks(value.length);
            queryString += ") ";

            console.log(queryString);

            connection.query(queryString, values, function(err, result){
                if (err){
                    throw err;
                }

                callBack(result);
            });
        }, 

        //update
        update: function(burgers, objValues, condition, callBack){
            let queryString = "UPDATE " + burgers;

            queryString += " SET ";
            queryString += objSql(objValues);
            queryString += " WHERE ";
            queryString += condition;

            condition.log(queryString);
            connection.query(queryString, function(err, result){
                if (err){
                    throw err;
                }

                callBack(result);

            });

        }
};

//export to ORM
module.exports = orm;