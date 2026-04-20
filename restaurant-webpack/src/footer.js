export default function loadFooter() {
  const footer = document.createElement("div");
  content.appendChild(footer);
  footer.classList.add("footer");
  const foot1 = document.createElement("p");
  const foot2 = document.createElement("p");

  foot1.textContent = "HAVE A GOOD MEAL";
  foot2.textContent = "BY-AR7";

  footer.appendChild(foot1);
  footer.appendChild(foot2);
}
