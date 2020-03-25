const express = require("express"); 
const faker = require("faker"); 
const app = express(); 

app.use(express.static("public")); 
app.set("view engine", "ejs"); 


app.get("/", function(req, res) {
    let fakeData = getFakeData(); 
    res.render("home", {"data": fakeData}); 
}); 

app.get("/array", function(req, res) {
    let fakeData = getFakeData();
    res.render("array", {"data": fakeData}); 
}); 

app.get("/linkedlist", function(req, res) {
    let fakeData = getFakeData();
    res.render("linkedlist", {"data": fakeData}); 
}); 

app.get("/stack", function(req, res) {
    let fakeData = getFakeData();
    res.render("stack", {"data": fakeData}); 
});

app.get("/binarytree", function(req, res) {
    let fakeData = getFakeData();
    res.render("binarytree", {"data": fakeData}); 
});

app.get("*", function(req, res) {
    res.send("<h2 style='color: red;'>Page Not Found</h2>");

});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running!");
})

function getFakeData() {

    let data = {firstName: faker.name.firstName(), lastName: faker.name.lastName(), 
        date: faker.date.recent()};
    return data;
}




