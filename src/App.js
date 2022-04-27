import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = React.useState(true);

  return (
    <div className='App'>
      {status ? <h1>hello world</h1> : null}
      {/*<button onClick={() => setStatus(false)}>Hide</button>8*/}
      <button onClick={() => setStatus(!status)}> Toggle</button>
    </div>
  );
}

export default App;
