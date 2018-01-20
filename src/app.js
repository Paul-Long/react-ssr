import React, {Component} from 'react';
import {Provider} from './redux-min';
import Button from './components/Button';

export class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Button />
        </div>
      </Provider>
    )
  }
}
