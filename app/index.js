import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
    const [count,setCount] = useState(1);
    const minCount = 1, maxCount = 100;
    const valueToAddOrDecrease = 1;

    const increment = () => {
        if(count !== maxCount)
            setCount(count+valueToAddOrDecrease);
    }

    const decrement = () => {
        if(count !== minCount)
            setCount(count-valueToAddOrDecrease);
    }

    const setValue = value => {
        if(value <= maxCount)
            setCount(value);   
    }

    return(
        <div className="main">
           <div className="rectangle">
               <button onClick={()=>decrement()}> - </button>
               <input type="number" value={count} onChange={e => setValue(e.target.value)}/>
               <button onClick={()=>increment()}> + </button>
           </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'))