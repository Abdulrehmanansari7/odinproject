    function start(){
        const num = document.querySelector("input").value;
        const output = document.querySelector(".output");
        output.style.display = "flex"; 

        output.innerHTML = "";
        for (let i = 1; i <= num; i++){
            if(i % 3 === 0 && i % 5 === 0){
                output.innerHTML += "FizzBuzz "
            } else if(i % 5 === 0){
                output.innerHTML += "(Buzz) "
            } else if(i % 3 === 0){
                output.innerHTML += "(Fizz) "
            } else{
                output.innerHTML += `${i} `;
            } if(i % 5 === 0){
                output.innerHTML += "<br>"
            }
        }
    }




