//require express
let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

//Parse body to JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Handlebars
let exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Import Routes
let router = require("./controllers/burgers_controller.js");

app.use(router);


  
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });