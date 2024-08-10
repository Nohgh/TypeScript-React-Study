import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home/Home'
import {Header} from './component/componentRoot.ts';
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/usestate' element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
