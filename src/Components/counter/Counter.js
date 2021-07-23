import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => { 
        console.log("componentDidMount()")
        let memory=setInterval(() => {
            setCount(count=>count+1)
        }, 1000);
      console.log(memory)
     return
         clearInterval(memory)
     
    }, [])
    
   
    const increment=()=>{
        setCount(count => count+1)
    }

    const decrement=()=> {
        if(count>0)
        {
            setCount(count => count-1)
        }
    }
     console.log("render()")   
    return (
        <div>
            <button onClick={()=>increment()}>+</button>
            <h1>{count}</h1>
            <button onClick={()=> decrement()}>-</button>
        </div>
    )
}

export default Counter
