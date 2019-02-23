//require ORM
let orm = require("../config/orm.js");

//ORM functions
let burgers = {
    all: function(callBack){
        orm.all("burgers", function(res){
            callBack(res);
        });
    },
   create: function(columns, values, callBack){
        orm.create("burgers", columns, values, function(res){
            callBack(res);
        });
   },
   update: function(objValues, condition, callBack){
        orm.update("burgers", objValues, condition, function(res){
            callBack(res);
        });
   }
};

module.exports = burgers;
    
