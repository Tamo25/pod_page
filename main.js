 "use strict";

const email = document.querySelector('.email');
const button = document.querySelector('.btn-2');
const errorMessage = document.querySelector('.error-message');
const correct = document.querySelector(".correct");


let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input) {
    if (mailRegex.test(input.value)) {
      errorMessage.classList.remove("visible");
      correct.classList.add("visible");
    } else if (!mailRegex.test(input.value)) {
      correct.classList.remove("visible");
      errorMessage.classList.add("visible");
    }
  }

 button.addEventListener("click", (event) => {
    event.preventDefault();
    testMail(email);
    console.log("clicked");
  });

email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector('.btn-2').click();
  }
});