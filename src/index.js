
import React from 'react';
import { render } from 'react-dom';

import './index.less';
import Example from './App.js';


const App = () => {
  return <Example />
}


render(<App />, document.getElementById('main'));