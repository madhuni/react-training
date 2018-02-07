/* 'React' object is needed to be imported along with the 'Component' object */
import React, { Component } from 'react';
import './App.css';
// Importing our custom component
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/cockpit/Cockpit';

class App extends Component {
  /* 'state' is a reserved property of the react-class. It will re-render the component if any change is observed */
  state = {
    persons: [{
      id: 'aske',
      name: 'Vivek',
      role: 'Backend Developer'
    }, {
      id: 'kdjf',
      name: 'Saran',
      role: 'Designer'
    }, {
      id: 'fdka',
      name: 'Kanishka',
      role: 'Frontend Developer'
    }],
    isShowing: false
  }

  switchNameHandler = (newName) => {
    // console.log('Switch name is clicked');
    /*
     * React gives us the method to change the state of the component.
     * We shouldn't mutate the state of the component by directly accessing the properties of current state
    */
    this.setState({
      persons: [
        {name: newName, role: 'Python Backend Developer'},
        {name: 'Saran Babu', role: 'Lead Designer'},
        {name: 'Kanishka Mohan Madhuni', role: 'Frontend Web Developer'}
      ]
    });
  }

  changeNameHandler = (event, id) => {
    /* First finding the 'index' of the person which we are modifying from input */
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    /* Using the 'personIndex' getting the particular person object from the state (again the copy) */
    const person = {...this.state.persons[personIndex]};

    /* Changing the name property of the person object with the 'input value' */
    person.name = event.target.value;

    /* Again getting the new copy of the state */
    const persons = [...this.state.persons];

    /* Adding the new person object to that index with the updated 'name' property */
    persons[personIndex] = person;

    /* Setting the new state with the updated values */
    this.setState({
      persons: persons
    });

    // console.log(person);

    // console.log(event.target.value);
    /* Old approact to set the state */
    // this.setState({
    //   persons: [
    //     { name: 'Vivek', role: 'Backend Developer' },
    //     { name: event.target.value, role: 'Designer' },
    //     { name: 'Kanishka', role: 'Frontend Developer' }
    //   ]
    // });


  }

  togglePersonsHandler = () => {
    // console.log(this.state.isShowing);
    const doesShow = this.state.isShowing;
    this.setState({isShowing: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    console.log('deletePersonHandler is called');
    // const persons = this.state.persons; // here we are directly mutating the original state
    const persons = [...this.state.persons]; // creating copy of 'persons' array using 'spread' operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    /* Efficient way for writing conditions for the elements */
    let persons = null;

    if (this.state.isShowing) {
      /* Based on the condition we are assigning the whole bunch of elements to 'persons' variable */
      persons = (
        // <div>
        //   <Person name={this.state.persons[0].name} role={this.state.persons[0].role} />
        //   <Person
        //     name={this.state.persons[1].name}
        //     role={this.state.persons[1].role}
        //     /* We should prefer the 'bind' method of native JS to pass the values to the click event */
        //     click={this.switchNameHandler.bind(this, 'Vivek Anand Rocker Shocker')}
        //     /* Passind the new property 'changed' to the person component */
        //     changed={this.changeNameHandler}>My hobby is : Cricket</Person>
        //   <Person name={this.state.persons[2].name} role={this.state.persons[2].role} />
        // </div>

        <div>
          <Persons
            persons={this.state.persons}
            deleted={this.deletePersonHandler}
            changed={this.changeNameHandler} />
        </div>
      );
    }

    return (
      /*
       * One restriction we are having that we will need to wrap our component within one 'root' element.
       * In this case it's 'div.app' elment. We can't return a single element after the 'root' element.
       * In short if our component is having more than 1 elements, they should be wrapped into one single root element.
      */
      <div className="app">
        <Cockpit
          clicked = {this.switchNameHandler}
          toggle = {this.togglePersonsHandler}
          title = {this.props.title} />

        {persons} {/* Then we are adding the 'persons' variable here */}

        { 
          /* In-efficient way for applying conditions on the elements */
          /* In this way we can use the conditions as all we are writing is JS */
          // this.state.isShowing === true ?
          /* If the condition will be true, then the below block will be displayed */
          // <div>
          //   <Person name={this.state.persons[0].name} role={this.state.persons[0].role} />
          //   <Person
          //     name={this.state.persons[1].name}
          //     role={this.state.persons[1].role}
          //     /* We should prefer the 'bind' method of native JS to pass the values to the click event */
          //     click={this.switchNameHandler.bind(this, 'Vivek Anand Rocker Shocker')}
          //     /* Passind the new property 'changed' to the person component */
          //     changed={this.changeNameHandler}>My hobby is : Cricket</Person>
          //   <Person name={this.state.persons[2].name} role={this.state.persons[2].role} />
          // </div> : null /* Else the null value will be returned */
        }
      </div>
    );
  }
}

export default App;
