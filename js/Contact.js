// ==============================
// Contact Form Validation
// ==============================

// Get form

const form =
document.getElementById("contactForm");


// Email validation function

function validateEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}


// Validate form

form.addEventListener("submit",
function(event){

    event.preventDefault();

    // Input values

    const name =
    document.getElementById("name")
    .value.trim();

    const email =
    document.getElementById("email")
    .value.trim();

    const message =
    document.getElementById("message")
    .value.trim();

    const gender =
    document.querySelector(
    'input[name="gender"]:checked'
    );



    // Error areas

    const nameError =
    document.getElementById("nameError");

    const emailError =
    document.getElementById("emailError");

    const messageError =
    document.getElementById("messageError");

    const genderError =
    document.getElementById("genderError");



    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    genderError.textContent = "";



    let valid = true;



    // Name validation

    if(name === ""){

        nameError.textContent =
        "Name is required";

        valid = false;

    }



    // Email validation

    if(email === ""){

        emailError.textContent =
        "Email is required";

        valid = false;

    }

    else if(
        !validateEmail(email)
    ){

        emailError.textContent =
        "Invalid email address";

        valid = false;

    }



    // Message validation

    if(message === ""){

        messageError.textContent =
        "Message is required";

        valid = false;

    }



    // Gender validation

    if(!gender){

        genderError.textContent =
        "Please select gender";

        valid = false;

    }



    // Successful submission

    if(valid){

        form.reset();

        document
        .getElementById("messageError")
        .textContent =
        "Message sent successfully!";

    }

});