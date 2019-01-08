
var child = -1;


var listOfKids = [
{
    "name" : "Amrit",
    "video" : "https://www.youtube.com/embed/YoJOWrCe8B4",
    "image" : "./kidInfo/Amrit/image.jpg",
    "profile" : ""
},
    
{
    "name" : "Asish",
    "video" : "https://www.youtube.com/embed/jqEClhF2GZo",
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
    "video" : "https://www.youtube.com/embed/iYH1Ji3YZBc",
    "image" : "./kidInfo/Laxman/image.jpg",
    "profile" : ""
},

{
    "name" : "Manika",
    "video" : "https://www.youtube.com/embed/XC5JfCI5Hu0",
    "image" : "./kidInfo/Manika/image.jpg",
    "profile" : ""
},

{
    "name" : "Manisha",
    "video" : "https://www.youtube.com/embed/wCoWXgv5Yzc",
    "image" : "./kidInfo/Manisha/image.jpg",
    "profile" : ""
},

{
    "name" : "Nishan",
    "video" : "https://youtube.com/embed/Wm7cBx6L8oU",
    "image" : "./kidInfo/Nishan/image.jpg",
    "profile" : ""
},

{
    "name" : "Ranju",
    "video" : "https://www.youtube.com/embed/5K0ymZ_KKq8",
    "image" : "./kidInfo/Ranju/image.jpg",
    "profile" : ""
},

{
    "name" : "Santosh",
    "video" : "https://youtube.com/embed/zuEAOeDWee4",
    "image" : "./kidInfo/Santosh/image.jpg",
    "profile" : ""
},

{
    "name" : "Sudeep",
    "video" : "https://youtube.com/embed/I3thiGB_IUc",
    "image" : "./kidInfo/Sudeep/image.jpg",
    "profile" : ""
},

{
    "name" : "Susmita",
    "video" : "https://www.youtube.com/embed/LAM67rWkJUU",
    "image" : "./kidInfo/Susmita/image.jpg",
    "profile" : ""
},

{
    "name" : "Tulsi",
    "video" : "https://www.youtube.com/embed/17JW-eM87bk",
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
    if (child < 11){
        nextButton.textContent = listOfKids[child+1].name;
    } else {
        nextButton.textContent = listOfKids[0].name;
    }
    
    insertVid();
    insertName();
    insertImage();
    
});

$(document).on("click", "#nextBtn", function(){

    if(child < 11){
        child++;
        nextButton.textContent = listOfKids[child+1].name;
    } else if (child == 11){
        nextButton.textContent = listOfKids[0].name;
    } else{
        nextButton.textContent = listOfKids[0].name;
        child = 0;
    }

    insertVid();
    insertName();
    insertImage();
})


function insertVid(){
    $("#videoDisplay").empty();
    videoDisplay.src = listOfKids[child].video;
    
}

function insertName(){
    $("#nameDisplay").empty();
    nameDisplay.textContent = listOfKids[child].name;
}

function insertImage(){
    $("#image").empty();
    $("#profileInfo").empty();
    image.src = listOfKids[child].image;
}
