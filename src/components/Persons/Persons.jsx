import React, {Component} from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
  return (
    <Person
      name={person.name}
      role={person.role}
      click={() => props.deleted(index)}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />
  );
});

export default Persons;