// ==========================
// DIGITAL CLOCK
// ==========================

// Updates current time every second

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    document.getElementById("clock")
        .textContent = time;
}

// Update immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


// ==========================
// TYPEWRITER EFFECT
// ==========================

// Welcome message

const message =
"Welcome to the IS 181-GI Group Portfolio Website. Explore our profiles and learn more about our team members.";

let index = 0;

// Displays one character at a time

function typeWriter() {

    if(index < message.length) {

        document
        .getElementById("typewriter")
        .textContent +=
        message.charAt(index);

        index++;

        setTimeout(typeWriter, 50);
    }

}

// Start effect

typeWriter();