import Promise from "promise-polyfill";
import "whatwg-fetch";
import "./styles.css";

if (!window.Promise) {
  window.Promise = Promise;
};

const container = document.getElementById("container");

const display = (items) => {
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
        descriptionElement.innerHTML = item.volumeInfo.description;

        itemElement.appendChild(imageElement);
        itemElement.appendChild(titleElement);
        itemElement.appendChild(descriptionElement);

        container.appendChild(itemElement);
    });
};

const url = "https://www.googleapis.com/books/v1/volumes";
const query = "?maxResults=20&orderBy=newest&q={javascript}";

fetch(`${url}${query}`)
.then(
    response => response.json()
)
.then(
    data => display(data.items)
)
.catch(
    error => console.log(`Response not OK: ${error}`)
);
