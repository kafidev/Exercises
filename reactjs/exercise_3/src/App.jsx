import UserCard from "./UserCard";


function App() {

   let userName = "kafi";
   let email = "kafi11@gmail.com";

  return (
     <>
     
     <UserCard  userName ={userName}
     email ={email}
     />

     <UserCard  userName ={userName}
     email ={email}
     />
     
     </>
  )
}

export default App
