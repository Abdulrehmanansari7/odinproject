import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadFooter from "./footer.js";
import loadContact from "./contact.js";
import  "./styles.css";

const content = document.querySelector("#content")

function clearContent(){
    content.innerHTML = ""
}

document.getElementById("home").addEventListener("click", () => {
    clearContent();
    loadHome();
    loadFooter();
})
document.getElementById("menu").addEventListener("click", () => {
    clearContent();
    loadMenu();
    loadFooter();
})
document.getElementById("contact").addEventListener("click", () => {
    clearContent();
    loadContact();
    loadFooter();
})

loadHome();
loadFooter();

console.log("Hello")