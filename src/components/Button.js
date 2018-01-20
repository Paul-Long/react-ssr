import React from 'react';
import {connectS} from '../redux-min';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  fClick = () => {
    this.props.change({color: 'blue'});
  };

  render() {
    return (<button style={{color: this.props.color}}
                    onClick={this.fClick}
    >{`button-color-${this.props.color}`}</button>)
  }
}

export default connectS()(Button);
