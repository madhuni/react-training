import React from 'react';

import Aux from '../../hoc/Aux';

const Cockpit = function(props) {
  return(
    /* Instead of wrapping a 'html' element 'div' we can use the Higher order Component to wrap the adjacent elements */
    <Aux>
      <h1>{ props.title }</h1>
      <p className="radom">This is a random paragraph.</p>
          {/* This method of passing the new value to handler fn is in-efficient and we should avoid this */ }
      <button onClick={() => props.clicked('Yo Vivek Bacha!')}>Switch Name</button>
      <button onClick={props.toggle} className='main-btn'>Toggle persons</button>
      {/*
        * Here we are using the 'state' property of the class to pass the values to the component.
        * When the state changes, it automatically updates the 'props' object which we are passing to component
        * with the new values of changed state.
      */}
    </Aux>
  );
}

export default Cockpit;