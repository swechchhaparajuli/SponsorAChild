


/*
const mysql = require("mysql2");

var currChild = {

    assignFxn : function(name, imageURL, movieURL, profileInfo){
        this.name = name;
        this.imageURL = imageURL;
        this.movieURL = movieURL;
        this.profileInfo = profileInfo;
    }
}

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Apoorva@2019",
    database: "bdnlkanthaKids_db"
  });
  

$(document).on("click", ".kid" , function(){
    console.log("clicked");

    insertVid();
    insertInfo();
    insertImage();
});

$(document).on("click", "nextButton", function(){

    var child = parseInt($(this).attr("id"));

    getChosenChild(child);
    insertVid();
    insertName();
    insertImage();
})

function getChosenChild(id){
    connection.connect(function(err) {
        if (err) throw err;
        var query = "SELECT kids_name, videoURL, imageURL, profileInfo FROM products WHERE item_id IN (?)";
        connection.query(query, [id], function(err, res) {
            if(err){
              console.log("Sorry, please try entering a different ID, your item does not exist"); 
            }
                currChild.assignFxn(res[0].kids_name, res[0].imageURL, res[0].movieURL, res[0].profileInfo);
    });
    });
}

function insertVid(){
    $("#videoDisplay").empty();


}

function insertName(){
    $("#imageDisplay").empty();
    

}

function insertImage(){
    $("#profileDisplay").empty();

}


*/

var child = 0;

var listOfKids = [
{
    "name" : "Amrit",
    "video" : "./kidInfo/Amrit/image.jpg",
    "image" : "./kidInfo/Amrit/image.jpg",
    "profile" : ""
},
    
{
    "name" : "Asish",
    "video" : "",
    "image" : "./kidInfo/Asish/image.jpg",
    "profile" : ""
},

{
    "name" : "Kushal",
    "video" : "",
    "image" : "./kidInfo/Kushal/image.jpg",
    "profile" : ""
},

{
    "name" : "Laxman",
    "video" : "",
    "image" : "./kidInfo/Laxman/image.jpg",
    "profile" : ""
},

{
    "name" : "Manika",
    "video" : "",
    "image" : "./kidInfo/Manika/image.jpg",
    "profile" : ""
},

{
    "name" : "Manisha",
    "video" : "",
    "image" : "./kidInfo/Manisha/image.jpg",
    "profile" : ""
},

{
    "name" : "Nishan",
    "video" : "",
    "image" : "./kidInfo/Nishan/image.jpg",
    "profile" : ""
},

{
    "name" : "Ranju",
    "video" : "",
    "image" : "./kidInfo/Ranju/image.jpg",
    "profile" : ""
},

{
    "name" : "Santosh",
    "video" : "",
    "image" : "./kidInfo/Santosh/image.jpg",
    "profile" : ""
},

{
    "name" : "Sudeep",
    "video" : "",
    "image" : "./kidInfo/Sudeep/image.jpg",
    "profile" : ""
},

{
    "name" : "Susmita",
    "video" : "",
    "image" : "./kidInfo/Susmita/image.jpg",
    "profile" : ""
},

{
    "name" : "Tulsi",
    "video" : "./kidInfo/Amrit/Tulsi.mov",
    "image" : "./kidInfo/Tulsi/image.jpg",
    "profile" : ""
}

];

var nameDisplay = document.getElementById("nameDisplay");
var videoDisplay = document.getElementById("videoDisplay");
var profileDisplay = document.getElementById("profileInfo");
var imageDisplay = document.getElementById("image");
var nextButton = document.getElementById("nextBtn");

$(document).on("click", ".kid" , function(){
    
    child = parseInt($(this).attr("id"));
    nextButton.textContent = listOfKids[child].name;
    insertVid();
    insertName();
    insertImage();
});

$(document).on("click", "#nextBtn", function(){


    if(child < 11){
        child++;
    } else{
        child = 0;
    }

    nextButton.textContent = listOfKids[child].name;

    insertVid();
    insertName();
    insertImage();
})


function insertVid(){
    $("#videoDisplay").empty();
    videoDisplay.src = listOfKids[child-1].video;
}

function insertName(){
    $("#nameDisplay").empty();
    nameDisplay.textContent = listOfKids[child-1].name;
}

function insertImage(){
    $("#image").empty();
    $("#profileInfo").empty();
    image.src = listOfKids[child-1].image;
}
