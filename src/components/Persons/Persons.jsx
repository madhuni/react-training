import React, { Component } from 'react'; // { Component } is called the 'named-import'
import Person from './Person/Person';

/* Functional Component is changed to Stateful Component to apply the Lifecycle hooks */
class Persons extends Component {
  /**
   * Implementing the React Lifecycle hooks of the 'Persons' component
   */
  
  constructor(props) {
    super(props);
    console.log('[Persons.jsx] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.jsx] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.jsx] inside componentDidMount');
  }

  /**
   * The 'update' lifecycle hooks
  */

  componentWillReceiveProps(nextProps) {
    console.log('[Persons.jsx] inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.jsx] inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Persons.jsx] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Persons.jsx] inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.jsx] inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          role={person.role}
          click={() => this.props.deleted(index)}
          key={person.id}
          position={index}
          changed={(event) => this.props.changed(event, person.id)} />
      );
    });
  }
};

/* Functional Component */
/* const Persons = (props) => props.persons.map((person, index) => {
  return (
    <Person
      name={person.name}
      role={person.role}
      click={() => props.deleted(index)}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />
  );
}); */

export default Persons;