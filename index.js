let button = document.querySelectorAll("button");
let input  = document.getElementById("display");

button.forEach(ele => {
    ele.addEventListener("click" ,(e)=> {
        console.log(typeof(e.target.textContent));
        if(e.target.textContent === "C"){
            input.innerText = " ";
        }
        else if (e.target.textContent === ">") {
            input.innerText= input.innerText.slice(0,-1);
        }
        else if (e.target.textContent === "=") {
            input.innerText = eval(input.innerText);
        }
        else{
            input.innerText += e.target.textContent;
        }
    })
     
    input.scrollLeft = input.scrollWidth;   
})