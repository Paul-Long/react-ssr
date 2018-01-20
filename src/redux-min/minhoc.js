import React, {Component, createElement} from 'react';
import hoistStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types';

export function createConnect() {
  return function connectS() {
    return (function () {
      const contextTypes = {
        store: PropTypes.object
      };

      return function wrapWithConnect(WrappedComponent) {
        class Connect extends Component {
          constructor(props, context) {
            super(props, context);
            this.store = context.store
          }

          componentWillReceiveProps(nextProps) {

          }

          shouldComponentUpdate(nextProps, nextState) {
            return true;
          }

          render() {
            return createElement(WrappedComponent, {color: this.context.store.color, change: this.context.store.change})
          }
        }

        Connect.WrappedComponent = WrappedComponent;
        Connect.contextTypes = contextTypes;
        Connect.propTypes = contextTypes;
        return hoistStatics(Connect, WrappedComponent)
      }
    })()
  }
}

export default createConnect()
