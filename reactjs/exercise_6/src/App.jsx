import { useEffect, useState } from "react";


const App = () => {

const [name, setName] = useState('');

const [greeting, setGreeting] = useState('Hello');

useEffect(() => {
  if (!name) {
    document.title = "welcome!"
  } else {
    document.title = `${greeting}, ${name}`;
  }


}, [name , greeting]);


  return (
    <div>

    <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
      /> 
    <input 
          type="text" 
          value={greeting} 
          onChange={(e) => setGreeting(e.target.value)} 
      /> 

    </div>
  )
}

export default App
