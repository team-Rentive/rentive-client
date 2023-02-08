import { css, Global } from '@emotion/react';

const customReset = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	button {
		background: none;
		background-color: transparent;
		border: 0;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}
	textarea,
	input {
		border: none;
		resize: none;
		outline: none;
		background-color: transparent;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	/* Chrome autofill 스타일 제거, 커스텀 */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
		-webkit-transition: background-color 9999s ease-out;
		-webkit-box-shadow: 0 0 0px 1000px transparent inset;
		box-shadow: 0 0 0px 1000px transparent inset;
	}
`;

const global = () => css`
	@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
	${customReset}

	body {
		font-family: 'Spoqa Han Sans Neo';
	}
`;

function GlobalStyle() {
	return <Global styles={global()} />;
}

export default GlobalStyle;
