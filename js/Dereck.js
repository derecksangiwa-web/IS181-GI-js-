// ===============================
// Skills Toggle
// ===============================

// Shows and hides skill details

document.querySelectorAll(".skill-item").forEach(function(skill){

    skill.addEventListener("click", function(){

        const details =
        this.querySelector(".skill-details");

        details.classList.toggle("hidden");

    });

});


// ===============================
// Education Table Sorting
// ===============================

// Sort table by year

let ascending = true;

document.getElementById("sortBtn")
.addEventListener("click", function(){

    const table =
    document.querySelector("table");

    const rows =
    Array.from(table.rows).slice(1);

    rows.sort(function(a,b){

        const yearA =
        parseInt(a.cells[2].textContent);

        const yearB =
        parseInt(b.cells[2].textContent);

        return ascending
        ? yearA - yearB
        : yearB - yearA;

    });

    rows.forEach(function(row){

        table.appendChild(row);

    });

    ascending = !ascending;

});


// ===============================
// Read More / Read Less
// ===============================

// Expands hobbies section

const hobbyText =
document.getElementById("hobbyText");

const readMoreBtn =
document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", function(){

    hobbyText.classList.toggle("expanded");

    if(
        hobbyText.classList.contains("expanded")
    ){

        readMoreBtn.textContent =
        "Read Less";

    }

    else{

        readMoreBtn.textContent =
        "Read More";

    }

});


// ===============================
// Image Lightbox
// ===============================

// Opens image in popup

document.querySelectorAll(".gallery-img")
.forEach(function(img){

    img.addEventListener("click", function(){

        const overlay =
        document.createElement("div");

        overlay.classList.add("overlay");

        overlay.innerHTML = `

        <div class="lightbox">

            <img src="${this.src}"
            class="lightbox-img">

            <button id="closeLightbox">

                Close

            </button>

        </div>

        `;

        document.body.appendChild(overlay);

        document
        .getElementById("closeLightbox")
        .addEventListener("click", function(){

            overlay.remove();

        });

    });

});


// ===============================
// Scroll To Top
// ===============================

// Shows button after scrolling

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",
function(){

    if(window.scrollY > 200){

        topBtn.style.display =
        "block";

    }

    else{

        topBtn.style.display =
        "none";

    }

});

// Scroll smoothly

topBtn.addEventListener("click",
function(){

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Dark Mode
// ===============================

// Switch page theme

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",
function(){

    document.body.classList
    .toggle("dark-mode");

    if(
        document.body.classList
        .contains("dark-mode")
    ){

        themeBtn.textContent =
        "Light Mode";

    }

    else{

        themeBtn.textContent =
        "Dark Mode";

    }

});