import React from 'react';
import PropTypes from 'prop-types';

function providerFunc() {
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.store = {
        color: 'red',
        count: 1
      };
      this.state = {
        store: {
          color: 'red',
          count: 1
        }
      }
    }

    fChange = () => {
      this.store.color = this.store.color === 'red' ? 'blue' : 'red';
      this.store.count += 1;
      this.setState({store: this.store});
    };

    getChildContext() {
      return {
        store: {
          ...this.store,
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
