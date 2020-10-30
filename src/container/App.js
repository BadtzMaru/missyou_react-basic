import React, { Component } from 'react';

import './App.css';
import MyHeader from '../components/Header/Header';
import Persons from '../components/Persons/Persons';

// 有状态组件
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
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}
				/>
			);
		}

		return (
			<div className='App'>
				<MyHeader
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandle}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
