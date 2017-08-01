import "./fetch.js";
import display from "./display.js";
import "./styles.scss";

const container = document.getElementById("container");

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
