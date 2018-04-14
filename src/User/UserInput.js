import React from 'react';

const userInput = (props) => {
  return(
    <input type="text" onChange={(event) => props.onchange(event.target.value)} value={props.username}/>
  );
};

export default userInput;
