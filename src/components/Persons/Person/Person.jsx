import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_person.css';

/* Converted to Stateful Component to apply the lifecycle hooks */
class Person extends Component {
  /**
   * Implementing the React Lifecycle hooks of the 'Persons' component
   */

  constructor(props) {
    super(props);
    console.log('[Person.jsx] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.jsx] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.jsx] inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('[Person.jsx] inside render');
    return (
      <div className='person'>
        <p onClick={this.props.click}>Hi, I'm {this.props.name}! I am <em><b>{this.props.role}</b></em> in Ethereal Machines.</p>
        {/* We can access the properties of the component by using the 'children' keyword */}
        <p>{this.props.children}</p>
        {/* Stablishing the 'two-way-binding' by using the parents 'changed' method */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={(inp) => { this.inputElement = inp }} />
      </div>
    );
  }
};

/* Functional Component */
// const Person = (props) => {
//   return (
//     <div className='person'>
//       <p onClick={props.click}>Hi, I'm {props.name}! I am <em><b>{props.role}</b></em> in Ethereal Machines.</p>
//       {/* We can access the properties of the component by using the 'children' keyword */}
//       <p>{props.children}</p>
//       {/* Stablishing the 'two-way-binding' by using the parents 'changed' method */}
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

/* Using 'Prop-Types' package for checking the 'type' of Props */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  role: PropTypes.string,
  changed: PropTypes.func
}

// Exporting the whole component 'default' one
export default Person;