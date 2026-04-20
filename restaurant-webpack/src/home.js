export default function loadHome() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "AR'S PECULIAR";
  const container1 = document.createElement("div");
  container1.classList.add("container")
  
  content.appendChild(heading);
  content.appendChild(container1)
  
  const arr = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  const head1 = document.createElement("p");
  head1.textContent = "BREAKFAST";
  head1.classList.add("para1")
  container1.appendChild(head1)

  for (let i = 0; i < arr.length; i++) {
    const para1 = document.createElement("p");
    para1.textContent = `${arr[i]} : 9 PM to 11 PM`;
    container1.appendChild(para1);
  }

  // Lunch Container

  const container2 = document.createElement("div");
  container2.classList.add("container")
  content.appendChild(container2)

  const head2 = document.createElement("p");
  head2.textContent = "LUNCH" 
  head2.classList.add("para1")
  container2.appendChild(head2)

  for (let i = 0; i < arr.length; i++) {
    const para2 = document.createElement("p");
    para2.textContent = `${arr[i]} : 12 PM to 3 PM`;
    container2.appendChild(para2);
  }

  // Dinner Container
  const container3 = document.createElement("div");
  container3.classList.add("container")
  content.appendChild(container3);

  const head3 = document.createElement("div");
  head3.textContent = "DINNER";
  head3.classList.add("para1")
  container3.appendChild(head3)

  for(let i = 0; i < arr.length; i++){
    const para3 = document.createElement("p");
    para3.textContent = `${arr[i]} : 7 PM to 11 PM`;
    container3.appendChild(para3);
  }
}
