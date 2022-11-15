import { useState } from "react"
import "./App.css"
import { Footer, Nav, Popup } from "./components"
import { Outlet } from "react-router-dom"

function App() {
  const [openModal, setOpenModal] = useState(false)
  // const [page, setPage] = useState('home')
  return (
    <div className="App">
      <Popup openModal={openModal} setOpenModal={setOpenModal}/>
      <Nav setOpenModal={setOpenModal} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
