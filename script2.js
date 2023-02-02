let submit = document.querySelector(".btn");
let form = document.querySelector(".container");
let messageBox = document.querySelector(".message-box")

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.querySelector(".fullname").value;
    console.log(name);
    let message = document.querySelector(".message-box h1");

    message.innerHTML = "Thank you " + name + " for reaching out, I will be in contact with you soon!"

    form.classList.add("hide");
    messageBox.classList.remove("hide");


})