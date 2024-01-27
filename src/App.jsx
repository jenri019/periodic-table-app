
import { useState } from "react"
import { Info } from "./components/Info"
import { MainTable } from "./components/MainTable"

function App() {

  const [selectedElement, setSelectedElement] = useState([])

  return (
    <>
      <MainTable
        onChangeElement = {(el) => {setSelectedElement(el); console.log(el)}} />
      <hr />
      <Info selectedElement = {selectedElement} />
    </>
  )
}

export default App