import { useState } from "react";
import UnderReactMemo from "./UnderReactMemo";


const TestReactMemo = () => {
    const [count,setCount]=useState(0);
    const clickBtn=()=>{
        setCount(count+1);
    }
  return (
    <>
        <div>{count}</div>  
        <button onClick={clickBtn}>click</button>
        <UnderReactMemo props={"렌더링"}/>
    </>
  )
}

export default TestReactMemo