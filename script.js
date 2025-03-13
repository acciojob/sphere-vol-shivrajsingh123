document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("volume").value ="NaN";
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4); // Match Cypress expected value
});
