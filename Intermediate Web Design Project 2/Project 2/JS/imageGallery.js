"use strict";

const image_elements = ["Media/GalleryImages/ManPlantingTree.jpeg", 
                        "Media/GalleryImages/TeamMarkingTree.jpeg", 
                        "Media/GalleryImages/WomanAndChildPlantingTree.jpeg", 
                        "Media/GalleryImages/TeamClimbingTree.jpeg", 
                        "Media/GalleryImages/WomanPlantingTree.jpeg"];

// code the get element function
document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    const imageElements = document.querySelectorAll("img");


    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let firstImage = image_elements.shift();
        image_elements.push(firstImage);
        // display the first three images
        for(let i = 0; i < imageElements.length; i++){
            imageElements[i].src = image_elements[i];
        }

    });

    // click event listener for the Right button
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the elements in the array
        let lastImage = image_elements.pop();
        image_elements.unshift(lastImage);

        // display the first three images
        for(let i = 0; i < imageElements.length; i++){
            imageElements[i].src = image_elements[i];
        }

    });
})