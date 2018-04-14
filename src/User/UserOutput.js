import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p>User name:</p>
      <p>{props.name}</p>
    </div>
  );
};

export default userOutput;
