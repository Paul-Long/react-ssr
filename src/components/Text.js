import React from 'react';
import {connectS} from '../redux-min';

class Text extends React.Component {
  render() {
    return (
      <p>{this.props.count}</p>
    )
  }
}

export default connectS()(Text);