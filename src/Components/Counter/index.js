import React, { useState } from 'react';

const Counter = () => {
    const [counter,setCounter] = useState(11)
// variable = counter, valeur = 0
// setcounter: fonction pour mettre à jour le state
    return (
    <div>
         <button onClick={()=> {
            setCounter(counter + 1)
         }}>+</button>   

         <h2>{counter}</h2>

         <button onClick={()=> {
            setCounter(counter - 2)
         }}>-</button>


    </div>

    )

}

export default Counter;