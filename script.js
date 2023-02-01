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