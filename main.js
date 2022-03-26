"use strict"
var users = [{

    id: 1,

    name: "Veronika",

    email: "vgroves0@vistaprint.com",

    age: 50,

    city: "Javhlant",

    gender: "Female",

    inn: 2604048463

}, {

    id: 2,

    name: "Correy",

    email: "cskidmore1@shop-pro.jp",

    age: 50,

    city: "Junglinster",

    gender: "Male",

    inn: 5396152028

}, {

    id: 3,

    name: "Chrissie",

    email: "csobieski2@go.com",

    age: 40,

    city: "Mercaderes",

    gender: "Female",

    inn: 7437115687

}, {

    id: 4,

    name: "Adrianna",

    email: "awharrier3@hud.gov",

    age: 33,

    city: "Manuel Cavazos Lerma",

    gender: "Non-binary",

    inn: 6292774004

}, {

    id: 5,

    name: "Fairlie",

    email: "feliasen4@bing.com",

    age: 34,

    city: "Радовиш",

    gender: "Female",

    inn: 5943534093

}]
var active = null;
var active2 = null;

function dropdown() {

    var isImg = this.lastElementChild;

    if (active2 && isImg !== active2) {
        active2.classList.replace("arrow-down", "arrow")
    }

    active2 = isImg;

    var IsImgRight = isImg.classList.contains("arrow")
    if (IsImgRight) {
        isImg.classList.replace("arrow", "arrow-down")
    } else {
        isImg.classList.replace("arrow-down", "arrow")
    }



    var content = this.nextElementSibling;

    if (active && content !== active) {
        active.classList.replace("show", "hide");
    }

    active = content;

    var isHide = content.classList.contains("hide");
    if (isHide) {
        content.classList.replace("hide", 'show')
    } else {
        content.classList.replace("show", 'hide')
    }

}


function createAcordion(acordionSelector, data) {

    var container = document.querySelector(acordionSelector);

    for (var user of data) {
        var acordionTitle = document.createElement("div")
        var title = document.createElement("h2");
        var img = document.createElement("img")
        var wrapper = document.createElement("div");
        var div = document.createElement("div");
        var divContent = document.createElement("div")
        var listFirst = document.createElement("ul");
        var listSecond = document.createElement("ul")


        acordionTitle.onclick = dropdown;

        acordionTitle.className = "acordion-title";
        title.className = "title";
        img.className = "arrow";
        wrapper.className = "acordion hide";
        div.className = "acordion-avatar";
        divContent.className = "acordion-content";
        listFirst.className = "acordion-list";
        listSecond.className = "acordion-list";



        title.innerHTML = user.name;
        img.src = "image/arrow-right.svg";
        div.innerHTML = `<p class = "avatar">Avatar</p>`;
        listFirst.innerHTML = `<li class="acordion-item"> <b>inn: </b>${user.inn}</li>
        <li class="acordion-item"> <b>name: </b> ${user.name}</li>
        <li class="acordion-item"> <b>age: </b>${user.age} </li>`;
        listSecond.innerHTML = `<li class="acordion-item"> <b>email: </b>${user.email}</li>
        <li class="acordion-item"> <b>city: </b> ${user.city}</li>
        <li class="acordion-item"> <b>gender: </b>${user.gender} </li>`


        container.append(acordionTitle, wrapper);
        acordionTitle.append(title, img);
        wrapper.append(div, divContent);
        divContent.append(listFirst, listSecond);
    }

}
createAcordion(".container", users)