import React from 'react';

function Data({ name, chk }) {
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={chk}>Click me</button>
    </div>
  );
}

export default Data;