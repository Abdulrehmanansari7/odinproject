export default function loadMenu() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.style.marginLeft = "700px"
  heading.textContent = "MENU";
  content.appendChild(heading)

  //Breakfast
  const container1 = document.createElement("div");
  content.appendChild(container1)
  container1.classList.add("container");
  const head1 = document.createElement("div");
  head1.textContent = "BREAKFAST";
  head1.classList.add("para1")
  container1.appendChild(head1)

  const breakfast = ["FULLPLATER - $15", "POACHED EGGS - $5", "PANCAKE - $5", "ALL COFFEE - $3", "COLDRINKS - $5" ]

  for(let i = 0; i < breakfast.length; i++){
    const para1 = document.createElement("p");
    para1.textContent = `${breakfast[i]}`;
    container1.appendChild(para1)
  }

  //LUNCH
  const container2 = document.createElement("div");
  content.appendChild(container2)
  container2.classList.add("container");
  const head2 = document.createElement("div");
  head2.textContent = "LUNCH";
  head2.classList.add("para1")
  container2.appendChild(head2)

  const lunch = ["SPHAGHETTI - $10", "SANDWICH - $5", "HAMBURGER - $5", "BOURBON - $3", "COFFEE - $5" ]

  for(let i = 0; i < lunch.length; i++){
    const para2 = document.createElement("p");
    para2.textContent = `${lunch[i]}`;
    container2.appendChild(para2)
  }

  //DINNER
  const container3 = document.createElement("div");
  content.appendChild(container3)
  container3.classList.add("container");
  const head3 = document.createElement("div");
  head3.textContent = "DINNER";
  head3.classList.add("para1")
  container3.appendChild(head3)

  const dinner = ["STEAK - $10", "CHEESEBURGER - $5", "PIZZA - $5", "ICE-CREAM - $3", "WINE - $5" ]

  for(let i = 0; i < dinner.length; i++){
    const para3 = document.createElement("p");
    para3.textContent = `${lunch[i]}`;
    container3.appendChild(para3)
  } 
}

