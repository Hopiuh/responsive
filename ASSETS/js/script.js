document.addEventListener("DOMContentLoaded", function() {
    const imageGallery = document.getElementById("imageGallery");
    const imageUrlInput = document.getElementById("imageUrlInput");
    const addImageButton = document.getElementById("addImageButton");

    addImageButton.addEventListener("click", function() {
        const imageUrl = imageUrlInput.value.trim();

        if (imageUrl !== "") {
            const colDiv = document.createElement("div");
            colDiv.classList.add("col-md-4", "mb-3");

            const img = document.createElement("img");
            img.src = imageUrl;
            img.classList.add("img-fluid");
            img.style.maxHeight = "200px";
            img.style.objectFit = "cover";
            img.style.cursor = "pointer";

            img.addEventListener("click", function() {
                window.open(imageUrl);
            });

            colDiv.appendChild(img);
            imageGallery.appendChild(colDiv);

            imageUrlInput.value = "";
        } else {
            alert("Please enter a valid image URL!");
        }
    });
});
