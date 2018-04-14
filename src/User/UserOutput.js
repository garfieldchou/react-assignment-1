import React from 'react';

import './User.css'

const userOutput = (props) => {
  return(
    <div className="UserOp">
      <p>User name:</p>
      <p>{props.name}</p>
    </div>
  );
};

export default userOutput;
