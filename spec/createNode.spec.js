import createNode from "../src/scripts/createNode";
import ipsum from "./helpers/ipsum";

describe("createNode function", () => {
    it("can create a node of type 'item'", () => {
        const actual = {type: "item"};

        let expected = document.createElement("div");
        expected.className = "item";

        expect(createNode(actual)).toEqual(expected);
    });

    it("can create a node of type 'image'", () => {
        const actual = {
            type: "image",
            item: {
                volumeInfo: {
                    title: "Image title",
                    imageLinks: {
                        smallThumbnail: "www.image.com/image.jpg",
                    },
                },
            },
        };

        let expected = document.createElement("img");
        expected.className = "image";
        expected.src = "www.image.com/image.jpg";
        expected.alt = "Image title";

        expect(createNode(actual)).toEqual(expected);
    });

    it("can create a node of type 'title'", () => {
        const actual = {
            type: "title",
            item: {
                volumeInfo: {
                    title: "Title",
                },
            },
        };

        let expected = document.createElement("p");
        expected.className = "title";
        expected.innerHTML = "Title";

        expect(createNode(actual)).toEqual(expected);
    });

    it("can create a node of type 'description'", () => {
        const actual = {
            type: "description",
            item: {
                volumeInfo: {
                    description: ipsum,
                },
            },
        };

        let expected = document.createElement("p");
        expected.className = "description";
        const ipsum200 = ipsum.substring(0, 199);
        expected.innerHTML = `${ipsum200}...`;

        expect(createNode(actual)).toEqual(expected);
    });
});
