import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import ButtonPanel from './button-panel';

const App = () => (
  <div>
    <Display />
    <ButtonPanel />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
