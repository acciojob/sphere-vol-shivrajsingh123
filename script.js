function volume_sphere() {
    document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let radius = parseFloat(document.getElementById("radius").value);
    
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(2); // Display result with two decimal places
});

  
 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
