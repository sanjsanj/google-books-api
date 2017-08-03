export default function (itemObject) {
    let element;

    switch (itemObject.type) {
        case "item": {
            element = document.createElement("div");
            element.className = itemObject.type;
            break;
        }
        case "image": {
            element = document.createElement("img");
            element.className = itemObject.type;
            element.src = itemObject.item.volumeInfo.imageLinks.smallThumbnail;
            element.alt = itemObject.item.volumeInfo.title;
            break;
        }
        case "title": {
            element = document.createElement("p");
            element.className = itemObject.type;
            element.innerHTML = itemObject.item.volumeInfo.title;
            break;
        }
        case "description": {
            element = document.createElement("p");
            element.className = itemObject.type;
            element.innerHTML = itemObject.item.volumeInfo.description.substring(0, 199);
            element.innerHTML += "...";
            break;
        }
        default:
            break;
    };

    return element;
};
