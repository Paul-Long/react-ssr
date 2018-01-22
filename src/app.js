import React, {Component} from 'react';
import {Provider} from './redux-min';
import Button from './components/Button';
import Text from './components/Text';

export class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Button text='颜色' />
          <Text />
        </div>
      </Provider>
    )
  }
}
