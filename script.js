document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the form and add a submit event listener
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        var firstName = document.getElementById('first1').value;
        var lastName = document.getElementById('last1').value;
        var email = document.getElementById('email1').value;
        var code = document.getElementById('code1').value;
        var phone = document.getElementById('no1').value;
        var gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        
        // Collect selected skills
        var skills = [];
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            skills.push(checkbox.value);
        });

        // Create an object to store the collected data (you can modify this structure)
        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            code: code,
            phone: phone,
            gender: gender,
            skills: skills
        };

        // Perform any additional actions with formData (e.g., send it to a server)

        // Display the collected data (you can replace this with your logic)
        console.log(formData);

        // Display a popup message saying "Submission successful"
        alert("Submission successful");

        // Clear the form
        form.reset();
    });
});

// Additional JavaScript code can be added here for other interactions.