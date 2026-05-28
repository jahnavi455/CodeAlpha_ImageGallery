const images = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");
const deleteBtn = document.querySelector(".delete-btn");

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

function showImage(){

    lightboxImg.src = images[currentIndex].src;

}
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage();

});
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage();

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){

            nextBtn.click();

        }

        if(e.key === "ArrowLeft"){

            prevBtn.click();

        }

        if(e.key === "Escape"){

            lightbox.style.display = "none";

        }

    }

});

deleteBtn.addEventListener("click", () => {

    images[currentIndex].remove();

    lightbox.style.display = "none";

});