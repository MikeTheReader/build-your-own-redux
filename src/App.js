import React, { Component } from 'react';
import EnterStuff from './container/enter-stuff';
import DisplayValues from './presentational/functional-display-values'
import { store } from './our-redux/redux';

class App extends Component {

  constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(() =>
            this.setState(store.getState())
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
        <div className="col-md-4">
          <EnterStuff store={store}/>
        </div>
        <div className="col-md-4">
          <DisplayValues text={this.state.text} count={this.state.count}/>
        </div>
      </div>
    );
  }
}

export default App;


