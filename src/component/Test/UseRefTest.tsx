import { useRef } from "react"

const UseRefTest = () => {
    const inputRef=useRef<HTMLInputElement|null>(null);
    const focusOnInput=()=>{
        inputRef.current?.focus();
    }
    
  return (
    <div>
        <button onClick={focusOnInput}>click</button>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default UseRefTest