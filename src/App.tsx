import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Board,Mypage,Home} from "./page/pageroot"
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/board' element={<Board/>}></Route>
          <Route path='/mypage' element={<Mypage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
