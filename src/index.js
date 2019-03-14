
import React, { useState } from 'react';
import { render } from 'react-dom';

import './index.less';

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

const App = () => {
  return <Example />
}


render(<App />, document.getElementById('main'));