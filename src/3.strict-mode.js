/** @type {string} */
let loggedInUsername;

/**
 * @type {"demo" | "no-demo"}
 */
let demo = 'demo';

/**
 * @typedef {import('assert')} assert
 */

console.log(demo);

const users = [
	{ name: "Oby", age: 12 },
	{ name: "Heera", age: 32 },
];
const loggedInUser = users.find((u) => u.name === loggedInUsername);

if (loggedInUser) {
	console.log(loggedInUser.age);
}

/**
 *
 * @param {string} s example string
 */
export function fn(s) {
	console.log(s.substring(3));
}
