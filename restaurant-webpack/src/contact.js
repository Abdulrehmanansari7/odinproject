const contacts = [
  {
    name: "MAMA BEAR",
    role: "CHEF",
    phone: "555-555-5554",
    email: "totallyRealEmail@notFake.com"
  },
  {
    name: "PAPA BEAR",
    role: "MANAGER",
    phone: "555-555-5554",
    email: "perfectlyRealEmail@notFake.com"
  },
  {
    name: "BABY BEAR",
    role: "WAITER",
    phone: "555-555-5554",
    email: "perfectlyRealEmail@notFake.com"
  }
];

export default function loadContact(){
    const content = document.getElementById("content")
    const heading = document.createElement("h1")
    heading.textContent = "CONTACT US"
    heading.style.marginLeft = "650px"
    content.appendChild(heading)

    contacts.forEach(person => {
        const container1 = document.createElement("div");
        container1.classList.add("container")
        content.appendChild(container1);
    
        const para1 = document.createElement("p");
        const head1 = document.createElement("p");
        head1.textContent = person.name;
        head1.classList.add("para1")
        container1.appendChild(head1);
        para1.innerHTML = `${person.role} <br> ${person.phone} <br> ${person.email}`
        para1.style.paddingLeft = "30px"
        para1.style.textAlign = "start";
        container1.appendChild(para1);
    })
}