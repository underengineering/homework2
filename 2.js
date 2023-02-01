"use strict";

const input = "JavaScript Exercises";
const camelCase =
    input.charAt(0).toLowerCase() +
    input
        .slice(1)
        .split(" ")
        .map((word, index) =>
            index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");

console.log(camelCase);
