import React from 'react';

const Child = (props) => {
    const person = {
        name: 'John Smith',
        age: 999
    };

    const buttonClickHandler = () => {
        props.passData(person);
    }


  return (
    <div>
      <button onClick={buttonClickHandler}>Show the info</button>
    </div>
  )
}

export default Child;
