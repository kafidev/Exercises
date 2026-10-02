import { useEffect, useState } from "react";


const App = () => {

  const  [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(()=>{
       
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }

     window.addEventListener('mousemove' , handleMouseMove);

     return () =>{
      window.removeEventListener('mousemove', handleMouseMove);
     }
  })

  return (
    <div>
      <p>X: {coords.x}, Y: {coords.y}</p>
    </div>
  )
}

export default App