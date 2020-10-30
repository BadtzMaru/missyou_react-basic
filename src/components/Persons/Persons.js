import React from 'react';
import Person from './Person/Person';

// 无状态组件
const Persons = (props) => {
	return props.persons.map((person, index) => {
		return (
			<Person
				myclick={() => props.clicked(index)}
				key={person.id}
				name={person.name}
				count={person.count}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	});
};

export default Persons;
