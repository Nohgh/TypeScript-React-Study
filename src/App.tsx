import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import './firebase-messaging-sw.js'

import GlobalStyles from './GlobalStyles'
import Standby from './page/Standby/Standby'
import Home from './page/Home/Home'
import Footer from './component/Footer/Footer'
import { Header } from './component/componentRoot'
import BoardOutlet from './page/Board/BoardOutlet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const Board=lazy(async()=>await import('./page/Board/Board'));
const Mypage=lazy(async()=>await import('./page/Mypage/Mypage'));
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles/>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/board' element={<Suspense fallback={<Standby/>}><Board/></Suspense>}>
              <Route path='location' element={<BoardOutlet/>}></Route>
            </Route>
            <Route path='/mypage' 
              element={
              <Suspense fallback={<Standby/>}>
                <Mypage/>
              </Suspense>}>
            </Route>
          </Routes>
          <Footer/>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
