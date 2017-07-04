import React, { Component } from 'react';
import EnterStuff from './container/enter-stuff';
import DisplayStuff from './container/display-stuff';
import { Provider, store } from './our-redux/redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div>
            <h2>Build Your Own Redux</h2>
          </div>
          <div className="col-md-4">
            <EnterStuff/>
          </div>
          <div className="col-md-4">
            <DisplayStuff/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;


