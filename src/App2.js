import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import InboxScreen from './components/InboxScreen';

class App2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App2;