
//var fs = require("fs");

var child = -1;

var listOfKids = [
{
    "name" : "Amrit",
    "video" : "https://www.youtube.com/embed/YoJOWrCe8B4",
    "image" : "./kidInfo/Amrit/image.png",
    "profile" : profileWriter("Name: Amrit Pariyar ," +

    "Age: 9 years ," +
    
    "Future career: Singer ," +
    
    "Hobby: Play with friends and travel ," +
    
    "Favourite Food: Chicken curry")
},
    
{
    "name" : "Asish",
    "video" : "https://www.youtube.com/embed/jqEClhF2GZo",
    "image" : "./kidInfo/Asish/image.jpg",
    "profile" : profileWriter("Name: Ashish ," +

        "Age: 10 years ," + 
        
        "Future career: Doctor ," +
        
        "Hobby: Play football ," +
        
        "Favourite Food: Chicken curry")
},

{
    "name" : "Kushal",
    "video" : "https://www.youtube.com/embed/jJtwcYc6yXg",
    "image" : "./kidInfo/Kushal/image.png",
    "profile" : profileWriter("Name: Kushal ," +

    "Age: 10 years ," + 
    
    "Future career: Pilot ," +
    
    "Hobby: Playing with a remote controlled car ," +
    
    "Favourite Food: Jerry (a type of Nepali dessert)")
},

{
    "name" : "Laxman",
    "video" : "https://www.youtube.com/embed/iYH1Ji3YZBc",
    "image" : "./kidInfo/Laxman/image.png",
    "profile" : profileWriter("Name: Laxman Bika ," +

    "Age: 10 years ," +
    
    "Future career: Teacher ," +
    
    "Hobby: Reading playing singing and dancing " +
    
    "Favourite Food: Cake")
},

{
    "name" : "Manika",
    "video" : "https://www.youtube.com/embed/XC5JfCI5Hu0",
    "image" : "./kidInfo/Manika/image.png",
    "profile" : profileWriter("Name: Manika Bika ," +

    "Age: 8 years ," + 
    
    "Future career: Teacher ," +
    
    "Favourite Food: Momo")
},

{
    "name" : "Manisha",
    "video" : "https://www.youtube.com/embed/wCoWXgv5Yzc",
    "image" : "./kidInfo/Manisha/image.png",
    "profile" : profileWriter("Name: Manisha Bika ," +

    "Age: 9 years ," +
    
    "Favourite Food: Momo ")
},

{
    "name" : "Nishan",
    "video" : "https://youtube.com/embed/Wm7cBx6L8oU",
    "image" : "./kidInfo/Nishan/image.png",
    "profile" : profileWriter("Name: Nishan ," +

    "Age: 11 years ," +
    
    "Future career: Dancer ," +
    
    "Hobby: Singing ," +
    
    "Favourite Food: Chicken curry")
},

{
    "name" : "Ranju",
    "video" : "https://www.youtube.com/embed/5K0ymZ_KKq8",
    "image" : "./kidInfo/Ranju/image.png",
    "profile" : profileWriter("Name: Ranju ," +

    "Age: 13 years ," +
    
    "Future career: Scientist ," +
    
    "Hobby: Badminton ," +
    
    "Favourite Food: Chicken curry and Roti")
},

{
    "name" : "Santosh",
    "video" : "https://youtube.com/embed/zuEAOeDWee4",
    "image" : "./kidInfo/Santosh/image.png",
    "profile" : profileWriter("Name: Santosh Rawal ," +

    "Age: 11 years ," +
    
    "Future career: Pilot ," +
    
    "Food: Chicken Momo")
},

{
    "name" : "Sudeep",
    "video" : "https://youtube.com/embed/I3thiGB_IUc",
    "image" : "./kidInfo/Sudeep/image.jpg",
    "profile" : profileWriter("Name: Sudeep Pariyar ," +

    "Age: 10 years ," +
    
    "Future career: Singer ," +
    
    "Hobby: Dance and Drawing ," +
    
    "Favourite Food: Cake with frosting")
},

{
    "name" : "Susmita",
    "video" : "https://www.youtube.com/embed/LAM67rWkJUU",
    "image" : "./kidInfo/Susmita/image.png",
    "profile" : profileWriter("Name: Susmita ," +

    "Age: 11 years ," +
    
    "Future career: Teacher ," +
    
    "Hobby: Dance, reading and writing ," +
    
    "Favourite Food: Chow Mein")
},

{
    "name" : "Tulsi",
    "video" : "https://www.youtube.com/embed/17JW-eM87bk",
    "image" : "./kidInfo/Tulsi/image.png",
    "profile" : profileWriter("Name: Tulsi ," +

    "Age: 6 years ," +
    
    "Food: Momo and noodles")
}
];

function profileWriter(name){


    return (name);

    /*fs.readFile( "kidInfo/"+ name + "/profile.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        return data;
    });*/
}

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

$(document).on("click", "#home-page", function(){
    $("#videoDisplay").empty();
    $("#nameDisplay").empty();
    $("#image").empty();
    $("#profileInfo").empty();

    profileDisplay.textContent = "";
    videoDisplay.src = "";
    image.src = "./kidInfo/image.jpg";
    nameDisplay.textContent = "Meet the Students!";
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

    insertName();
    insertImage();
    insertVid();
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
    var name = listOfKids[child].profile;
    var description = name.split(",");
    console.log(description);

    for (var i = 0; i < description.length; i++){
        var breakObj = document.createElement("BR");
        var profileText = document.createElement("p");
        profileDisplay.appendChild(breakObj);
        profileText.innerHTML = description[i];
        profileDisplay.appendChild(profileText);
    }

}
