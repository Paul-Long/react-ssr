import React from 'react';
import PropTypes from 'prop-types';

function providerFunc() {
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.store = {
        color: 'red'
      };
      this.state = {
        store: {
          color: 'red'
        }
      }
    }

    fChange = () => {
      this.store.color = this.store.color === 'red' ? 'blue' : 'red';
      this.setState({store: {color: this.state.color === 'red' ? 'blue' : 'red'}});
    };

    getChildContext() {
      console.log(this.store);
      return {
        store: {
          color: this.store.color,
          change: this.fChange
        }
      };
    }

    render() {
      return this.props.children;
    }
  }

  Provider.childContextTypes = {
    store: PropTypes.object
  };
  return Provider;
}

export default providerFunc();
