import React, { useState } from "react";

const Zamikanie = () => {
  const [state, setState] = useState(0);

  const add = ()=>{
    setState(state+1)
    setState(state+1) //пишется что срабатывает замыкание функционального компонента 
  }
  return (
    <div>
      <button onClick={add}>Add</button>
      <h1>{state}</h1>
    </div>
  );
};

export default Zamikanie;
