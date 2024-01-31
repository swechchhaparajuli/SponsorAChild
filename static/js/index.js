
//var fs = require("fs");

var videoDisplay = document.getElementById("videoDisplay");
var buttonimage = document.getElementById("kidbutton");

let app = {};

let init = (app) => {

    // This is the Vue data.
    app.data = {
        kids: [], // See initialization.
        view_intro: true, // intro page
        view_info: false, // info of kid depending on which is clicked
        view_kids: true, // list of kids
        current_kid: 0,
        d_sum: false,
    };

    app.index = (a) => {

    };

    app.go_deployed = (kid_idx) => {
        window.open(app.vue.kids[kid_idx].deployed);
    }

    app.go_src = (kid_idx) => {
        window.open(app.vue.kids[kid_idx].src_code);
    }

    app.show_kid = (kid_idx) => {
        app.vue.view_intro = false;
        app.vue.view_info = true;
        app.vue.view_kids = false;
        app.vue.current_kid = kid_idx;
        videoDisplay.setAttribute('src', app.vue.kids[kid_idx].video);
        console.log(app.vue.kids[kid_idx].video);
    }

    app.show_intro = () => {
        app.vue.view_intro = true;
        app.vue.view_info = false;
        app.vue.view_kids = false;
    }

    app.show_allkids = () => {
        app.vue.view_info = false;
        app.vue.view_intro = false;
        app.vue.view_kids = true;
    }

    app.display_summary = (kid_idx) => {
        app.vue.d_sum = true;
        app.vue.current_kid = kid_idx;
    }

    


    // We form the dictionary of all methods, so we can assign them
    // to the Vue app in a single blow.
    app.methods = {
        go_deployed: app.go_deployed,
        go_src: app.go_src,
        show_allkids: app.show_allkids,
        show_intro: app.show_intro,
        show_kid: app.show_kid,
        display_summary: app.display_summary

    };


    // This creates the Vue instance.
    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods,
    });

    // And this initializes it.
    app.init = () => {
        // You should load the posts from the server.
        // This is purely debugging code.
        kids = [
            // This is a post.
            {
                id: 1,
                name: "Amrit",
                video: "https://www.youtube.com/embed/YoJOWrCe8B4",
                image: "./kidInfo/Amrit/image.png",
                sponsored: false,
                age: 9,
                future_career: "Singer",
                hobby: "play with friends and travel",
                favourite_food: "Chicken curry"
            },
            {
                id: 2,
                name: "Ashish",
                video: "https://www.youtube.com/embed/jqEClhF2GZo",
                image: "./kidInfo/Asish/image.png",
                sponsored: true,
                age: 10,
                future_career: "Doctor",
                hobby: "play football",
                favourite_food: "Chicken curry"
            },
            {
                id: 3,
                name : "Kushal",
                video : "https://www.youtube.com/embed/jJtwcYc6yXg",
                image : "./kidInfo/Kushal/image.png",
                sponsored : false,
                age: 10,
                future_career: "Pilot",
                hobby: "play with remote controlled cars",
                favourite_food: "Jerry (a type of Nepali dessert)"
            }, 
            {
                id: 4,
                name : "Laxman",
                video : "https://www.youtube.com/embed/iYH1Ji3YZBc",
                image : "./kidInfo/Laxman/image.png",
                sponsored: true,
                age: 10,
                future_career : "Teacher",
                hobby : "read, play with my friends, sing and dance ",
                favourite_food : "Cake"
            },
            {
                id: 5,
                name : "Manika",
                video : "https://www.youtube.com/embed/XC5JfCI5Hu0",
                image : "./kidInfo/Manika/image.png",
                sponsored : true,           
                age: 8,
                future_career: "Teacher",
                hobby : "",
                favourite_food: "Momo"
            },
            {
                id: 6,
                name : "Manisha",
                video : "https://www.youtube.com/embed/wCoWXgv5Yzc",
                image : "./kidInfo/Manisha/image.png",
                sponsored: true,
                age: 9,
                future_career: "",
                hobby : "",
                favourite_food: "Momo"
            },
            {
                id: 7,
                name : "Nishant",
                video : "https://youtube.com/embed/Wm7cBx6L8oU",
                image : "./kidInfo/Nishan/image.png",
                sponsored : true,
                age: 11,
                future_career: "Dancer",
                hobby: "sing",
                favourite_food: "Chicken curry"
            },
            {
                id: 8,
                name : "Ranju",
                video : "https://www.youtube.com/embed/5K0ymZ_KKq8",
                image : "./kidInfo/Ranju/image.png",
                sponsored : false,
                age : 13,
                future_career : "Scientist",
                hobby : "play badminton",
                favourite_food : "Chicken curry and Roti"
            },
            {
                id: 9,
                name : "Santosh",
                video : "https://youtube.com/embed/zuEAOeDWee4",
                image : "./kidInfo/Santosh/image.png",
                sponsored : true,
                age: 11,
                future_career: "Pilot",
                favourite_food : "Chicken Momo"
            },
            
            {
                id: 10,
                name : "Sudeep",
                video : "https://youtube.com/embed/I3thiGB_IUc",
                image : "./kidInfo/Sudeep/image.jpg",
                sponsored : false,
                age : 10,
                future_career : "Singer",
                hobby : "dancing and drawing",
                favourite_food : "Cake with frosting"
            },
            
            {
                id: 11,
                name : "Susmita",
                video : "https://www.youtube.com/embed/LAM67rWkJUU",
                image : "./kidInfo/Susmita/image.png",
                sponsored : false,
                age : 11,
                future_career : "Teacher",
                hobby : "dance, read and write",
                favourite_food : "Chow Mein"
            },
            {
                id: 12,
                name : "Tulsi",
                video : "https://www.youtube.com/embed/17JW-eM87bk",
                image : "./kidInfo/Tulsi/image.png",
                sponsored : true,  
                age: 6,
                future_career: "",
                hobby: "",
                favourite_food: "Momo and noodles"
            },
            {
                id: 13,
                name : "Ageline",
                video : "",
                image : "./kidInfo/Ageline/image.jpg",
                sponsored : false,
                age : 6,
                future_career : "Teacher",
                hobby : "dance, read and write",
                favourite_food : "Pizza"
            },
            {
                id: 14,
                name : "Esmi",
                video : "",
                image : "./kidInfo/Esmi/image.jpg",
                sponsored : true,  
                age: 12,
                future_career: "",
                hobby: "",
                favourite_food: "Pizza"
            },
            {
                id: 15,
                name : "Rohan",
                video : "",
                image : "./kidInfo/Rohan/image.jpg",
                sponsored : false,
                age : 6,
                future_career : "Teacher",
                hobby : "dance, read and write",
                favourite_food : "Pizza"
            },
            {
                id: 16,
                name : "Rajan",
                video : "",
                image : "./kidInfo/Rajan/image.jpg",
                sponsored : true,  
                age: 12,
                future_career: "Teacher",
                hobby: "play soccer",
                favourite_food: "Pizza"
            }
            
        ];

        // TODO: Load the posts from the server instead.
        // We set the posts.

       /* axios.get(posts_url).then((result) => {
            console.log("recieved:", result.data);
            result_posts = result.data.posts;
            indexed_posts = app.index(result_posts);
            app.vue.posts = indexed_posts;

        }).catch((error) => {
            console.log(error);
        });*/
        app.vue.kids = kids;
    };

    // Call to the initializer.
    app.init();
};

// This takes the (empty) app object, and initializes it,
// putting all the code i
init(app);













/*var child = -1;

var listOfKids = [
{
    "name" : "Amrit",
    "video" : "https://www.youtube.com/embed/YoJOWrCe8B4",
    "image" : "./kidInfo/Amrit/image.png",
    "sponsored": false,
    "profile" : profileWriter("Name: Amrit Pariyar ," +

    "Age: 9 years ," +
    
    "Future career: Singer ," +
    
    "Hobby: Play with friends and travel ," +
    
    "Favourite Food: Chicken curry")
},
{
    "name" : "Ashish",
    "video" : "https://www.youtube.com/embed/jqEClhF2GZo",
    "image" : "./kidInfo/Asish/image.jpg",
    "sponsored": false,
    "profile" : profileWriter("Name: Aashish Nagari," +

        "Age: 10 years ," + 
        
        "Future career: Doctor ," +
        
        "Hobby: Play football ," +
        
        "Favourite Food: Chicken curry")
},
{
    "name" : "Kushal",
    "video" : "https://www.youtube.com/embed/jJtwcYc6yXg",
    "image" : "./kidInfo/Kushal/image.png",
    "sponsored": false,
    "profile" : profileWriter("Name: Kushal Nepali," +

    "Age: 10 years ," + 
    
    "Future career: Pilot ," +
    
    "Hobby: Playing with a remote controlled car ," +
    
    "Favourite Food: Jerry (a type of Nepali dessert)")
},
{
    "name" : "Laxman",
    "video" : "https://www.youtube.com/embed/iYH1Ji3YZBc",
    "image" : "./kidInfo/Laxman/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Laxman BK ," +

    "Age: 10 years ," +
    
    "Future career: Teacher ," +
    
    "Hobby: Reading playing singing and dancing " +
    
    "Favourite Food: Cake")
},
{
    "name" : "Manika",
    "video" : "https://www.youtube.com/embed/XC5JfCI5Hu0",
    "image" : "./kidInfo/Manika/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Manika Bika ," +

    "Age: 8 years ," + 
    
    "Future career: Teacher ," +
    
    "Favourite Food: Momo")
},
{
    "name" : "Manisha",
    "video" : "https://www.youtube.com/embed/wCoWXgv5Yzc",
    "image" : "./kidInfo/Manisha/image.png",
    "sponsored": false,
    "profile" : profileWriter("Name: Manisha Bika ," +

    "Age: 9 years ," +
    
    "Favourite Food: Momo ")
},
{
    "name" : "Nishant",
    "video" : "https://youtube.com/embed/Wm7cBx6L8oU",
    "image" : "./kidInfo/Nishan/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Nishant BK ," +

    "Age: 11 years ," +
    
    "Future career: Dancer ," +
    
    "Hobby: Singing ," +
    
    "Favourite Food: Chicken curry")
},
{
    "name" : "Ranju",
    "video" : "https://www.youtube.com/embed/5K0ymZ_KKq8",
    "image" : "./kidInfo/Ranju/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Ranju Sarki," +

    "Age: 13 years ," +
    
    "Future career: Scientist ," +
    
    "Hobby: Badminton ," +
    
    "Favourite Food: Chicken curry and Roti")
},
{
    "name" : "Santosh",
    "video" : "https://youtube.com/embed/zuEAOeDWee4",
    "image" : "./kidInfo/Santosh/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Santosh Rawal ," +

    "Age: 11 years ," +
    
    "Future career: Pilot ," +
    
    "Food: Chicken Momo")
},

{
    "name" : "Sudeep",
    "video" : "https://youtube.com/embed/I3thiGB_IUc",
    "image" : "./kidInfo/Sudeep/image.jpg",
    "sponsored": false,
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
    "sponsored": true,
    "profile" : profileWriter("Name: Susmita Nagari," +

    "Age: 11 years ," +
    
    "Future career: Teacher ," +
    
    "Hobby: Dance, reading and writing ," +
    
    "Favourite Food: Chow Mein")
},

{
    "name" : "Tulsi",
    "video" : "https://www.youtube.com/embed/17JW-eM87bk",
    "image" : "./kidInfo/Tulsi/image.png",
    "sponsored": true,
    "profile" : profileWriter("Name: Tulsi Bika," +

    "Age: 6 years ," +
    
    "Food: Momo and noodles")
}
];

function profileWriter(name){


    return (name);

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

    for (var i = 0; i < description.length; i++){
        var breakObj = document.createElement("BR");
        var profileText = document.createElement("p");
        profileDisplay.appendChild(breakObj);
        profileText.innerHTML = description[i];
        profileDisplay.appendChild(profileText);
    }

    if (listOfKids[child].sponsored){
        var sponsorSticker = document.createElement ("img");
        sponsorSticker.src = "kidInfo/sponsored.png";
        $(sponsorSticker).attr('style', 'height:100px');
        profileDisplay.appendChild(sponsorSticker);
    }

}
*/
