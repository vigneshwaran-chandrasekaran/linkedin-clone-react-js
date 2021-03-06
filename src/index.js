import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Router } from 'routes';
import { theme } from 'styles/theme';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		margin: 0;
		font-family: 'Source Sans Pro', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
    margin: 0 auto;
	width: 100%;
	min-height: 100vh;
	background-color: ${theme.colors.isabelline};
	}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
