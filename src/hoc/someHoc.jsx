/**
 * Instead of using the Higher Order Component just to wrap the
 * HTML elements, we can also add some logic there.
 */

 import React from 'react';
 
 /**
  * This component is simply a ES6 function which ultimately
  returns a 'functional Component' or a 'Class component'.
 */
 const someHoc = (WrappedComponent, someProperty) => {
  return (props) => {
    <div className={someProperty}>
    {/* We will use the ES6 'spread' method to pass the 'props'
      to our new 'wrapper component'
    */}
      <WrappedComponent {...props} />
    </div>
  }
 }

 /* Returning a Class Component */
//  const someHoc = (WrappedComponent, someProperty) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={someProperty}>
//           {/* We will use the ES6 'spread' method to pass the 'props'
//           to our new 'wrapper component'
//         */}
//           <WrappedComponent {...this.props} />
//         </div>
//     )}
//   };
// }

export default someHoc;