import React from 'react';

const userInput = (props) => {
  return(
    <input type="text" onChange={(event) => props.changed(event.target.value)} value={props.username}/>
  );
};

export default userInput;
