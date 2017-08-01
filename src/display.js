export default function (items) {
    items.map(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";

        const imageElement = document.createElement("img");
        imageElement.className = "image";
        imageElement.src = item.volumeInfo.imageLinks.smallThumbnail;
        imageElement.alt = item.volumeInfo.title;

        const titleElement = document.createElement("p");
        titleElement.className = "title";
        titleElement.innerHTML = item.volumeInfo.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.className = "description";
        descriptionElement.innerHTML = item.volumeInfo.description.substring(0, 199);
        descriptionElement.innerHTML += "...";

        itemElement.appendChild(imageElement);
        itemElement.appendChild(titleElement);
        itemElement.appendChild(descriptionElement);

        container.appendChild(itemElement);
    });
};
