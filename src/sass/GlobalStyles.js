import { createGlobalStyle } from "styled-components";

import { device, until } from "../utilities/mixins";

const GlobalStyles = createGlobalStyle`
	:root {
	  --white: #fafafa;
	  --black: #212121;
	  --red: #fc4349;
	  --grey: #f5f5f5;
	  --light-grey: #ccc;
	  --green: #10b500;
	  --yellow: #fff498;
	  --github: #161514;
	  --star: #ffd602;
	  --codepen: #212121;
	  --twitter: #55acee;
	  --linkedin: #0077b5;
	  --instagram: #e1306c;
	  --cornell: #583d78;
	  --blackbird: #3c4156;
	  --mack-media-group: #80bd01;
	  --ibm: #5392ff;
	  --git: #fd7e14;
	  --scrollbar: var(--white);
	  --scrollbar-bg: var(--black);
	  --systemFonts: Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	  --primary: var(--systemFonts);
	  --secondary: "Roboto Slab";
	  --highlight: var(--yellow);
	  --selection: var(--black);
	  --copy: var(--white);
	  --copy-size: 1rem;
	}

	*,
	*::before,
	*::after {
	  box-sizing: border-box;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-rendering: optimizeLegibility;
	}

	*::selection {
	  background: var(--highlight);
	  color: var(--selection);
	}

	::-webkit-scrollbar-track {
	  background-color: var(--scrollbar);
	}

	::-webkit-scrollbar {
	  width: 10px;
	  background-color: var(--scrollbar);
	}

	::-webkit-scrollbar-thumb {
	  background-color: var(--scrollbar-bg);
	}

	* {
	  margin: 0;
	  padding: 0;
	}

	html {
	  overflow: auto;
	  height: auto;

	  background: none;
	}

	body {
	  font-family: var(--primary);
	  color: var(--copy);
	  -webkit-text-size-adjust: 100%;
	  -moz-text-size-adjust: 100%;
	  -ms-text-size-adjust: 100%;
	  line-height: 1.6em;

	  background: var(--white);
	}

	section {
	  width: 100%;
	}

	hr {
	  margin: 10px auto;

	  width: 90%;
	  height: 5px;

	  background: var(--white);
	}

	.MuiCircularProgress-root {
		width: 10px !important;
		height: 10px !important;

		circle {
			stroke: var(--black);
		}
	}

	.bx--skeleton__text {
		height: 0.75rem;
	}

	h1,
	h2,
	h3 {
	  font-family: var(--primary);
	}

	h1 {
	  font-size: 3rem;
	}

	h2 {
	  font-size: 2.5rem;
	  font-weight: 700;

	  ${until(
      device.iPad(),
      () => `
	  font-size: 4rem;
	  `
    )}

		${until(
      device.iPhone(),
      () => `
		font-size: 2rem;
		`
    )}
	}

	h3 {
	  font-size: 2rem;
	  font-weight: 700;

	  ${until(
      device.iPhone(),
      () => `
		font-size: 1.5rem;
		`
    )}
	}

	.title {
	  margin: 25px 0;

	  line-height: 1;
	}

	.subtitle {
	  margin-bottom: 50px;

	  color: darken(#ccc, 15);
	  line-height: 1.5;

	  ${until(
      device.iPhone(),
      () => `
		font-size: 1.15rem;
		margin-bottom: 25px !important;
		`
    )}
	}

	p {
	  font-size: var(--copy-size);

	  color: var(--black);

	  ${until(
      device.iPhone(),
      () => `
		font-size: 1rem;
		`
    )}
	}

	.link {
	  text-decoration: underline;
	  color: var(--red);

	  &:hover {
		color: darken(#ccc, 15);
	  }
	}
`;

export default GlobalStyles;