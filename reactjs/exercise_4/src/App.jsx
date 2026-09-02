import { useState } from "react";


function App() {

  const [isToggled , setIsToggled] = useState(true);

  const handleToggled = () =>{

    setIsToggled(!isToggled);
  }

  return (
    
    <>
    
     <p>The Buutton Is: {isToggled ? "On" : "Off"}</p>

     <button onClick={handleToggled}>Turn {isToggled ? "Off" : "On"}</button>
    
    </>


  )
}

export default App
