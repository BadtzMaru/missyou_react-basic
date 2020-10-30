import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App title='anything' />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
