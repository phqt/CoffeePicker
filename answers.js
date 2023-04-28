const form = document.querySelector("#coffee-form");
const resultContainer = document.querySelector("#result-container");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const cream = form.elements.cream.value;
    const milk = form.elements.milk.value;
    const espresso = form.elements.espresso.value;

    let recommendation = "";

    if (cream === "none" && milk === "none" && espresso === "none") {
        recommendation = "You didn't select any preferences. Please choose at least one.";
    } else if (cream === "none" && milk === "none") {
        recommendation = "You might like an Americano.";
    } else if (espresso === "none") {
        if (cream === "light" && milk === "light") {
            recommendation = "You might like a Latte.";
        } else if (cream === "moderate" && milk === "light") {
            recommendation = "You might like a Cappuccino.";
        } else if (cream === "heavy" && milk === "light") {
            recommendation = "You might like a Flat White.";
        } else if (cream === "none" && milk === "moderate") {
            recommendation = "You might like a Macchiato.";
        } else if (cream === "none" && milk === "heavy") {
            recommendation = "You might like a Cortado.";
        } else {
            recommendation = "Based on your preferences, we recommend trying a latte or a cappuccino.";
        }
    } else {
        if (cream === "light" && milk === "light") {
            recommendation = "You might like a Flat White.";
        } else if (cream === "moderate" && milk === "light") {
            recommendation = "You might like a Cappuccino.";
        } else if (cream === "heavy" && milk === "light") {
            recommendation = "You might like a Cortado.";
        } else if (cream === "none" && milk === "moderate") {
            recommendation = "You might like a Macchiato.";
        } else if (cream === "none" && milk === "heavy") {
            recommendation = "You might like a Mocha.";
        } else if (cream === "light" && milk === "moderate") {
            recommendation = "You might like a Latte Macchiato.";
        } else if (cream === "light" && milk === "heavy") {
            recommendation = "You might like a Breve.";
        } else if (cream === "moderate" && milk === "moderate") {
            recommendation = "You might like a Flat White.";
        } else if (cream === "moderate" && milk === "heavy") {
            recommendation = "You might like a Mocha Breve.";
        } else if (cream === "heavy" && milk === "moderate") {
            recommendation = "You might like a Caffè con Panna.";
        } else {
            recommendation = "Based on your preferences, we recommend trying a latte or a cappuccino.";
        }
    }

    // Save the recommendation to localStorage
    localStorage.setItem("recommendation", recommendation);

    // Display the recommendation
    resultContainer.textContent = recommendation;
});
