import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a template</h1>
      </header>
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}
export default hot(App);