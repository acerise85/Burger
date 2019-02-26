//require ORM
let orm = require("../config/orm.js");

//ORM functions
let burger = {
    all: function(callBack){
        orm.all(function(res){
            callBack(res);
        });
    },
   create: function(burger, callBack){
        orm.create(burger, function(res){
            callBack(res);
        });
   },
   update: function(objValues, condition, callBack){
        orm.update("burgers", objValues, condition, function(res){
            callBack(res);
        });
   }
};

module.exports = burger;
    
