/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				'wave-pattern': 'url("../img/wave-white.png")',
				"wave-pattern-dots": "url(../img/pattern-white-dots.png)",
			},
		},
    screens:{
      "xsm": "320px"
    }
	},
	plugins: [],
};
