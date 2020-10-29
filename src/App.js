import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: '张三', count: 10 },
			{ name: '李四', count: 20 },
			{ name: '王五', count: 30 },
		],
		otherState: 'anything',
		showPersons: false,
	};
	switchNameHandler = (newName) => {
		const persons = [...this.state.persons];
		persons[0].name = newName;
		this.setState({
			persons,
		});
	};
	nameChangeHandler = (event) => {
		const persons = [...this.state.persons];
		persons[0].name = event.target.value;
		this.setState({
			persons,
		});
	};
	togglePersonsHandle = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			marginRight: '10px',
		};
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					<Person
						myclick={this.switchNameHandler.bind(this, '米修missu')}
						changed={this.nameChangeHandler}
						name={this.state.persons[0].name}
						count={this.state.persons[0].count}
					/>
					<Person
						changed={this.nameChangeHandler}
						name={this.state.persons[1].name}
						count={this.state.persons[1].count}
					/>
					<Person
						changed={this.nameChangeHandler}
						name={this.state.persons[2].name}
						count={this.state.persons[2].count}
					>
						{this.state.otherState}
					</Person>
				</div>
			);
		}
		return (
			<div className='App'>
				<h1>Hello World</h1>
				<p>Hi, React App</p>
				<button
					onClick={() => this.switchNameHandler('arrow')}
					style={style}
				>
					箭头函数传参
				</button>
				<button
					style={style}
					onClick={this.switchNameHandler.bind(this, 'bind')}
				>
					bind传参
				</button>
				<button style={style} onClick={this.togglePersonsHandle}>
					内容切换
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
