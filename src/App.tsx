import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Standby from './page/Standby/Standby'
import './App.css'


import Home from './page/Home/Home'
const Board=lazy(async()=>await import('./page/Board/Board'));
const Mypage=lazy(async()=>await import('./page/Mypage/Mypage'))

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/board' 
            element={
            <Suspense fallback={<Standby/>}>
              <Board/>
            </Suspense>}>
          </Route>
          <Route path='/mypage' 
            element={
            <Suspense fallback={<Standby/>}>
              <Mypage/>
            </Suspense>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
