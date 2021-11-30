const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				brand: {
					green: "#71CC98",
					"purple-light": "#C8CBFB",
					blue: "#1E5093",
					"blue-light": "#F2F4FF",
					"dark-light": "#3C3C3B",
				}
			},
			fontFamily: {
				"comfortaa": "Comfortaa, cursive"
			}
		},
	},

	plugins: [],
};

module.exports = config;
