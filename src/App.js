import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Hello World</h1>
				<p>Hi, React App</p>
				<Person />
				<Person />
				<Person />
				<Person />
			</div>
		);
	}
}

export default App;
