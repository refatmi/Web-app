function validateEmail() {
    var email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("result").innerText = "Please enter an email address.";
        return;
    }

    // API URL
    var apiUrl = `https://web-production-7f72.up.railway.app/validate-email?email=${email}`;

    // Make the request to the API
    fetch(apiUrl)
        .then(response => {
            console.log("API Response Status: " + response.status);  // Log response status
            return response.json();  // Parse the JSON response
        })
        .then(data => {
            console.log("API Response Data: ", data);  // Log parsed response data

            if (data.valid) {  // Check if the email is valid
                document.getElementById("result").innerText = `✅ Valid Email: ${data.email} (${data.reason})`;
                document.getElementById("result").style.color = "green";
            } else {
                document.getElementById("result").innerText = `❌ Invalid Email: ${data.email} (${data.reason})`;
                document.getElementById("result").style.color = "red";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerText = "Error: Unable to validate email.";
            document.getElementById("result").style.color = "red";
        });
}
