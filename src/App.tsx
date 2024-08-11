import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'

// import {Board,Mypage,Home} from "./page/pageroot"

import Home from './page/Home/Home'
const Board=lazy(async()=>await import('./page/Board/Board'));
const Mypage=lazy(async()=>await import('./page/Mypage/Mypage'))

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
