import React  from "react";
import Button from "./Button";
import { useSelector ,useDispatch } from "react-redux/es/exports";
import "./counter.css"

import {incrementCount ,decrementCount} from '../redux/counterSlice'



function CounterAction() {
    //global state 
    
    const countGlobalValue = useSelector(state=>state.counterStore.counter);
    // console.log(countGlobalValue)
    //dispatch
    const dispatch =useDispatch();
 
    const increment = () => {
      dispatch(incrementCount(1))
     
    };
  
    const decrement = () => {
      if(countGlobalValue > 0){
        dispatch(decrementCount(1))
      }
     
    
    };
    return(
      <div className="counter-wrap">
      <div className="header">
        <div className="count">
          <h3>Count:</h3>
          <h1>{countGlobalValue}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={decrement}  
           />
          <Button title={"+"} action={increment} />
        </div>
      </div>
    </div>
    )
}

    export default CounterAction