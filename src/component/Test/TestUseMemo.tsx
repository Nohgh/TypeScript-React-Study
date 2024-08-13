import { useState } from "react"
const TestUseMemo = () => {
    const hardCalc=()=>{
        console.log("빡센 연산")
    }

    const [n,setN]=useState(0);
    const clickN=()=>{
        setN(1);
        console.log("clickN")
    }
  return (
    <div>
        <button onClick={clickN}>click N</button>
        <div>{n}</div>
        <button onClick={hardCalc}>click to calc</button>
    </div>
  )
}

export default TestUseMemo