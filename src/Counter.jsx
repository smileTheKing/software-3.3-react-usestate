import { useState } from "react";

const Counter = () => {
   //useState Hook
  const [count, setCount] = useState(0);


   //countPlus function
  const handlerPlus = () => {
    setCount((prev)=>prev+1);
  };


  //countMinus function
  const handlerMinus = () => {
    setCount((prev)=>{
      if(prev === 0){
        return prev;
      }else{
        return prev - 1;
      }

    
    });
  };
//reset count function
  const handlerReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="btn-container">
          <button onClick={handlerMinus} className="warning">-</button>
          <span className="count">{count}</span>
          <button onClick={handlerPlus} className="primary">+</button>
        </div>

        <button onClick={handlerReset} className="danger">reset</button>
      </div>
    </div>
  );
};
export default Counter;
