import "jsdom-global/register";
import createNode from "../src/scripts/createNode";
import ipsum from "./helpers/ipsum";

describe("createNode function", () => {
    it("can create a node of type 'item'", () => {
        const actual = createNode({type: "item"});

        let expected = document.createElement("div");
        expected.className = "item";

        expect(actual).toEqual(expected);
    });

    it("can create a node of type 'image'", () => {
        const actual = createNode({
            type: "image",
            item: {
                volumeInfo: {
                    title: "Image title",
                    imageLinks: {
                        smallThumbnail: "http://lorempixel.com/5/5/",
                    },
                },
            },
        });

        let expected = document.createElement("img");
        expected.className = "image";
        expected.src = "http://lorempixel.com/5/5/";
        expected.alt = "Image title";

        expect(actual).toEqual(expected);
    });

    it("can create a node of type 'title'", () => {
        const actual = createNode({
            type: "title",
            item: {
                volumeInfo: {
                    title: "Title",
                },
            },
        });

        let expected = document.createElement("p");
        expected.className = "title";
        expected.innerHTML = "Title";

        expect(actual).toEqual(expected);
    });

    it("can create a node of type 'description'", () => {
        const actual = createNode({
            type: "description",
            item: {
                volumeInfo: {
                    description: ipsum,
                },
            },
        });

        let expected = document.createElement("p");
        expected.className = "description";
        const ipsum200 = ipsum.substring(0, 199);
        expected.innerHTML = `${ipsum200}...`;

        expect(actual).toEqual(expected);
    });
});
