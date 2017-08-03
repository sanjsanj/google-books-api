import "./scripts/fetch";
import createNode from "./scripts/createNode";
import append from "./scripts/append";
import "./styles/styles.scss";

const container = document.getElementById("container");

fetch("https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=newest&q={javascript}")
.then(
    response => response.json()
)
.then(
    data => {
        const { items } = data;

        items.map(item => {
            const itemElement = createNode({type: "item"});
            const imageElement = createNode({type: "image", item});
            const titleElement = createNode({type: "title", item});
            const descriptionElement = createNode({type: "description", item});

            append(itemElement, [imageElement, titleElement, descriptionElement]);
            append(container, [itemElement]);
        });
    }
)
.catch(
    error => console.log(`Response not OK: ${error}`)
);
