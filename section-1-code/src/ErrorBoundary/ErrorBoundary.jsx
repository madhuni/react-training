/*
  This 'ErrorBoundary' component is a good tool for
  handling the 'errors' which 'are not in our control'
  means they may or may not happen and we can't do
  anything about them.
*/

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: ''
  }

  /* This is a react message for catching the error */
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMsg: info});
  }

  render() {
    if (this.state.hasError) {
      return(
        /* We can represent the error msg in our
        own customized and designed way.
        And then we can show them to the user in a graceful
        manner */
        <h1>{ this.state.errorMsg }</h1>
      )
    } else {
      return(
        /* If no error will be there then this component
        is going to return the 'child' components */
        this.props.children
      )
    }
  }
}