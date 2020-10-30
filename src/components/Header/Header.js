import React from 'react';
import classes from './Header.css';
const MyHeader = (props) => {
	const style = {
		color: 'white',
		backgroundColor: 'green',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
		marginRight: '10px',
	};
	const assignedClasses = [];
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}
	if (props.showPersons) {
		style.backgroundColor = 'red';
	}
	return (
		<div>
			<h1>{props.appTitle}</h1>
			<p className={assignedClasses.join(' ')}>Hi, React App</p>
			<button style={style} onClick={props.clicked}>
				内容切换
			</button>
		</div>
	);
};
export default MyHeader;
