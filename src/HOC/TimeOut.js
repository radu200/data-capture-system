import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const withTimeOut = WrappedComponent => {
  class TimeOut extends Component {
    state = {
      redirect: false,
    };

    componentDidMount() {
      this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
    }

    componentWillUnmount() {
      clearTimeout(this.id);
    }

    render() {
      return this.state.redirect ? <Redirect to="/" /> : <WrappedComponent />;
    }
  }
  return TimeOut;
};

export default withTimeOut;
