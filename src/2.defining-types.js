/**
 * @typedef {import('./types/User.js').User} User
 */

/** @type {User} */
const user = {
	name: "Hayes",
	age: 0,
};

console.log(user.name);

/** @type {User} */
const wrongUser = {
	name: "Hayes",
	age: 20
}

console.log(wrongUser.name);
