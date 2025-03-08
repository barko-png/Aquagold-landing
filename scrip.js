document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#connect-wallet");
    button.addEventListener("click", function() {
        alert("Metamask connection feature coming soon!");
    });

    const form = document.getElementById("signup-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const responseMessage = document.getElementById("response-message");

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = "Thank you for signing up!";
            responseMessage.style.color = "lightgreen";
        })
        .catch(error => {
            responseMessage.textContent = "Something went wrong. Try again later.";
            responseMessage.style.color = "red";
        });
    });
});
