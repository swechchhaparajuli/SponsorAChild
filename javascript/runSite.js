
var child = 0;

//hello

var listOfKids = [
{
    "name" : "Amrit",
    "video" : "https://www.youtube.com/embed/5K0ymZ_KKq8",
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
