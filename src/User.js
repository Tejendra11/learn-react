import React from 'react';
function User(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: 'skyblue', margin: 10 }}>
      <h1>hello{props.name}</h1>
      <h2>Email:{props.Email}</h2>
    </div>
  );
}

export default User;
