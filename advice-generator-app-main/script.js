const targetButton = document.querySelector(".dice");

const url = "https://api.adviceslip.com/advice";

let quote = document.querySelector('.quote-para');
let quoteId = document.querySelector('.quote-id');


const fetchData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            quoteId.textContent = data.slip.id;
            quote.textContent = data.slip.advice;
        });
};

targetButton.addEventListener("click", fetchData);
