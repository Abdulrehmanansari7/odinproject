import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadfooter from "./footer.js";
import  "./styles.css";

const content = document.querySelector("#content")

function clearContent(){
    content.innerHTML = ""
}

document.getElementById("home").addEventListener("click", () => {
    clearContent();
    loadHome();
    loadfooter();
})
document.getElementById("menu").addEventListener("click", () => {
    clearContent();
    loadMenu();
    loadfooter();
})

loadMenu();

console.log("Hello")