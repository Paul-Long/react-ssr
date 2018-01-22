import React from 'react';
import {connectS} from '../redux-min';

@connectS()
class Text extends React.Component {
  render() {
    return (
      <p>{this.props.count}</p>
    )
  }
}

export default Text;