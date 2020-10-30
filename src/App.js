import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: '张三', count: 10 },
			{ id: 2, name: '李四', count: 20 },
			{ id: 3, name: '王五', count: 30 },
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
	nameChangeHandler = (event, id) => {
		const persons = [...this.state.persons];
		const personIndex = persons.findIndex((p) => p.id === id);
		const person = { ...persons[personIndex] };
		person.name = event.target.value;
		persons[personIndex] = person;
		this.setState({ persons });
	};
	togglePersonsHandle = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};
	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons });
	};
	render() {
		const style = {
			color: 'white',
			backgroundColor: 'green',
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
					{this.state.persons.map((item, index) => (
						<Person
							key={item.id}
							myclick={() => this.deletePersonHandler(index)}
							changed={(event) =>
								this.nameChangeHandler(event, item.id)
							}
							name={item.name}
							count={item.count}
						/>
					))}
				</div>
			);
			style.backgroundColor = 'red';
		}
		// const classes = ['red', 'bold'].join(' ');
		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<div className='App'>
				<h1>Hello World</h1>
				<p className={classes.join(' ')}>Hi, React App</p>
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
