document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const formData = new FormData(event.target); // Collect form data

    // Convert form data to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    })

    // Log the form data
    console.log("jsonData--->", jsonData);

    alert("Form submitted successfully!");
})