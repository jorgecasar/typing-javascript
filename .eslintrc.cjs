module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2024: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:jsdoc/recommended-typescript-flavor-error",
		"plugin:sonarjs/recommended",
	],
	plugins: [
		"no-secrets",
		"woke",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		tsconfigRootDir: __dirname,
	},
	ignorePatterns: ["dist-types/**/*", ".eslintrc.cjs"],
	rules: {
		"no-secrets/no-secrets": "error",
		"woke/all": "error",
	}
};
