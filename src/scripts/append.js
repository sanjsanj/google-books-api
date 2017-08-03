export default function (parent, childArray) {
    return childArray.map(child => parent.appendChild(child));
};
