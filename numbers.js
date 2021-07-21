const form = document.querySelector(".form"); 
const submitBtn = document.querySelector(".btn"); 
const numFacts = document.querySelector(".num-facts");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const inputVal = e.target.querySelector(".form-control").value;
    e.target.inputVal;
console.log(inputVal);


const api_key = "http://numbersapi.com/";
fetch(api_key + inputVal)
  .then(response => response.text())
  .then(text => numFacts.innerHTML = text);
 
});


 