import React from "react";
interface Props{
    props:string
}
const UnderReactMemo = ({props}:Props) => {
    console.log("렌더링 됨")
  return (
    <div>{props}</div>
  )
}
const MemoizedUnderReactMemo= React.memo(UnderReactMemo);
export default MemoizedUnderReactMemo;