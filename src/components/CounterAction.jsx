import React, { useState } from "react";
import Button from "./Button";
import "./counter.css"
function CounterAction() {
    const [count, setCount] =useState(0) ;
 
    let incrementCount = () => {
      
      const newCountValue = count + 1;
      setCount(newCountValue);
    };
  
    let decrementCount = () => {
      if(count > 0){
        const newCountValue = count - 1;
        setCount(newCountValue);
      }
     
    
    };
    return(
      <div className="counter-wrap">
      <div className="header">
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={decrementCount}  
           />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
    )
}

    export default CounterAction