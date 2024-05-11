import { useState } from "react"


function App() {
  const [color,setColor]= useState("yellow")

  return (
    <div className="h-screen w-full" style={{background:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl">
          <button className="flex rounded-full outline-none px-4" 
          style={{background: "red"}} onClick= {()=> setColor("red")}>Red</button>
          <button className="flex rounded-3xl outline-none px-4" 
          style={{background: "white"}} onClick={ () => setColor("white")}>White</button>
          <button className="flex rounded-3xl outline-none px-4" 
          style={{background: "blue"}} onClick={()=> setColor("blue")}>Blue</button>
          <button className="flex rounded-3xl outline-none px-4" 
          style={{background:"green"}} onClick={ ()=> setColor("green")}>Green</button>
        </div>
      </div>
    </div>
    )
}

export default App
