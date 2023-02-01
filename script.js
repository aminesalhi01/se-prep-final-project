let helloButton = document.querySelector(".click-btn-hello");
let helloSection = document.querySelector(".profile div");


helloButton.addEventListener("click", function(){
    if(helloSection.classList.contains("hide-hello")===false){
        helloSection.classList.add("hide-hello");
    }
    else{
        helloSection.classList.remove("hide-hello")
    }
})
let skillButton = document.querySelector(".click-btn-skills");
let skillSection = document.querySelector(".skills div");

skillButton.addEventListener("click", function(){
    if (skillSection.classList.contains("hidden-skills")===false){
        skillSection.classList.add("hidden-skills");
    }
    else{
        skillSection.classList.remove("hidden-skills")
    }
})

let contactButton = document.querySelector(".click-btn-contact");
let contactSection = document.querySelector(".contact-me div");

contactButton.addEventListener("click", function(){
    if(contactSection.classList.contains("hidden-contact")=== false){
        contactSection.classList.add("hidden-contact");
    }
    else{
        contactSection.classList.remove("hidden-contact");
    }
})
let contactSubmit = document.querySelector(".contact-btn");
contactSubmit.addEventListener("click", function(){
    let url = "./index2.html";
    window.open(url);
})