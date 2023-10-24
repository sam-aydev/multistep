import { BrowserRouter, Route, Routes } from "react-router-dom"
import BodyMulti from "./pages/BodyMulti"
import NextMulti from "./pages/NextMulti"
import FirstMonth from "./pages/FirstMonth"
import FirstYear from "./pages/FirstYear"
import SumMonth from "./pages/SumMonth"
import SumYear from "./pages/sumYearly"
import { useState } from "react"

function App() {
  const [number, setNumber] = useState(1)

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route element={<BodyMulti number={number} setNumber={setNumber} />} path='/' />
          <Route path='monyr'>
            <Route element={         
              <NextMulti number={number} setNumber ={setNumber} />
              } index />
            <Route element={<FirstMonth number={number} setNumber ={setNumber} />} path='fimonth'/>
            <Route element={<FirstYear number={number} setNumber ={setNumber} />} path='fiyear'/>
          </Route>
          <Route element={<SumMonth number={number} setNumber ={setNumber}/>} path='month' />
          <Route element={<SumYear number={number} setNumber ={setNumber}/>} path='year' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
