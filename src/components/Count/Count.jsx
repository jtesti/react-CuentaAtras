import React, { useState, useEffect } from "react";
import './Count.css';

function Count() {
    const [counter, setCounter] = useState(6000000);
  
    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (
      <div className="Count">
        <div>Cuenta atrás: {counter}</div>
      </div>
    );
  }
  export default Count;