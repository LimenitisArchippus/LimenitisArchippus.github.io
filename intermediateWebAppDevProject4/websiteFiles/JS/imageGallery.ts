const image_elements: string[][] = [["Media/GalleryImages/ManPlantingTree.jpeg", "Man Planting Tree"], 
                        ["Media/GalleryImages/TeamMarkingTree.jpeg", "Team Marking Tree"], 
                        ["Media/GalleryImages/WomanAndChildPlantingTree.jpeg", "Woman And Child Planting Tree"],
                        ["Media/GalleryImages/TeamClimbingTree.jpeg", "Team Climbing Tree"], 
                        ["Media/GalleryImages/WomanPlantingTree.jpeg", "Woman Planting Tree"]];
                        


// code the get element function
document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    const imageElements = document.querySelectorAll("img");


    // click event listener for the Left button
    const leftButtonElement = document.querySelector("#left_button");
    if(leftButtonElement != null){
        leftButtonElement.addEventListener("click", evt => {
            // shift the items in the array to the left
            const firstImage = image_elements.shift();
            if(firstImage == null){
                console.log("there is no images in the image_elements array");
            }else{
                image_elements.push(firstImage);
                // display the first three images
                for(let i = 0; i < imageElements.length; i++){
                    imageElements[i].src = image_elements[i][0];
                    imageElements[i].alt = image_elements[i][1];
                }
            }
        });
    } else console.log("There is no left button element");


    // click event listener for the Right button
    const rightButtonElement = document.querySelector("#right_button");
    if(rightButtonElement != null){
        rightButtonElement.addEventListener("click", evt => {
            // shift the elements in the array
            const lastImage = image_elements.pop();
            if(lastImage == null){
                console.log("there is no images in the image_elements array");
            }else{
                image_elements.unshift(lastImage);
    
                // display the first three images
                for(let i = 0; i < imageElements.length; i++){
                    imageElements[i].src = image_elements[i][0];
                    imageElements[i].alt = image_elements[i][1] 
                }
            }
        });
    }else console.log("There is no right button element");
})