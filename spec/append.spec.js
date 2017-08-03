import "jsdom-global/register";
import append from "../src/scripts/append";

describe("append function", () => {
    it("can append a child element to a parent", () => {
        let parentElement = document.createElement("div");
        const childElement = document.createElement("ul");

        const actual = append(parentElement, [childElement])[0];

        const expected = parentElement.appendChild(childElement);

        expect(actual).toEqual(expected);
    });

    it("can append multiple child elements to a parent", () => {
        let parentElement = document.createElement("div");
        const childElementOne = document.createElement("ul");
        const childElementTwo = document.createElement("img");
        const childElementThree = document.createElement("p");

        const actual = append(parentElement, [childElementOne, childElementTwo, childElementThree])[0];

        let expected = parentElement.appendChild(childElementOne);
        expected.appendChild(childElementTwo);
        expected.appendChild(childElementThree);

        expect(actual).toEqual(expected);
    });
});
