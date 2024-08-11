import { Outlet } from "react-router"

const Board = () => {
  return (
    <>
      <div>게시판</div>
      <Outlet/>
    </>
  )
}

export default Board