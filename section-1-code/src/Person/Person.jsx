import React from 'react';
import './_person.css';


const Person = (props) => {
  return (
    <div className='person'>
      <p onClick={props.click}>Hi, I'm {props.name}! I am <em><b>{props.role}</b></em> in Ethereal Machines.</p>
      {/* We can access the properties of the component by using the 'children' keyword */}
      <p>{props.children}</p>
      {/* Stablishing the 'two-way-binding' by using the parents 'changed' method */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// Exporting the whole component 'default' one
export default Person;