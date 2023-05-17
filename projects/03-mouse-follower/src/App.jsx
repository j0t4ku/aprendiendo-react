import { useEffect, useState } from "react"

const FollowMouse=()=>{
  
const [enable, setEnable]= useState(false)
const[position,setPosition]= useState({x:0, y:0})
  useEffect(()=>{
  console.log("efecto")

  const handleMove=(e)=>{
    const [clientX, clientY]= e
    setPosition({x:clientX, y: clientY})
  }

  if(enable){
    window.addEventListener('pointermove',handleMove)
  }

  //cleanup
  return ()=>{
    window.removeEventListener('pointer', handleMove)
  }
},[enable])

  return (
    <main>
      <div 
      style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={()=>setEnable(!enable)}>{enable? 'Desactivado':'Activado'} seguir puntero</button>
    </main>
  )
}


function App() {
return (
  <main>
    <FollowMouse />
  </main>
)
}

export default App
