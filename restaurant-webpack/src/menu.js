export default function loadMenu() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.style.marginLeft = "700px"
  heading.textContent = "MENU";
  content.appendChild(heading)

  function createSection(title, items) {
  const container = document.createElement("div");
  container.classList.add("container");

  const head = document.createElement("p");
  head.textContent = title;
  head.classList.add("para1");

  container.appendChild(head);

  items.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    container.appendChild(p);
  });

  return container;
}
const breakfast = ["FULLPLATER - $15", "POACHED EGGS - $5", "PANCAKE - $5", "ALL COFFEE - $3", "COLDRINKS - $5" ]
const lunch = ["SPHAGHETTI - $10", "SANDWICH - $5", "HAMBURGER - $5", "BOURBON - $3", "COFFEE - $5" ]
const dinner = ["STEAK - $10", "CHEESEBURGER - $5", "PIZZA - $5", "ICE-CREAM - $3", "WINE - $5" ]
content.appendChild(createSection("BREAKFAST", breakfast));
content.appendChild(createSection("LUNCH", lunch));
content.appendChild(createSection("DINNER", dinner));
}

