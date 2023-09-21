import Login from "./Login/Login"
import Dashboard from "./Pages/Dashboard"
import Schedule from "./Pages/Schedule"
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import './App.css'

function RouterPage() {
  return (
      <div>
        <Navbar></Navbar>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Schedule" element={<Schedule />} />
          </Routes>
      </div>

  )
}

export default RouterPage