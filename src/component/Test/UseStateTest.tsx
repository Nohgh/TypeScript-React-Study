import { useState } from "react"

const UseStateTest = () => {
    const [count,setCount]=useState<number>(0);
  return (
    <>
       <div>{count}</div>
       <button onClick={()=>setCount(count+1)}>click</button>
    </>
 
  )
}

export default UseStateTest