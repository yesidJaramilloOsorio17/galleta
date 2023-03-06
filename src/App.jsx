import './App.css'
import UserCard from './pomponents/UserCard'
import Author from "./pomponents/author"
import users from "./data/phrases.json"
import { useState } from 'react'

function App() {
  const IMG = [
    "url(/fondo1.jpg)",
    "url(/fondo2.jpg)",
    "url(/fondo3.jpg)",
    "url(/fondo4.jpg)"
  ]
  const [ imgIndex, setImgIndex] = useState( 0 )
  const [index, setIndex] = useState(0)

const changeUser = () => {

if(index === (users.length -1)){
  setIndex(0)
}else{
  setIndex(index + 1)
}
if (imgIndex === (IMG.length -1)){
  setImgIndex(0)
}else{
  setImgIndex(imgIndex +1)
}
}

  return (
    <div className='App' style = {{ backgroundImage:IMG[imgIndex] }}>
   <h1 className='title'>Galleta de la fortuna</h1>
   
   <UserCard
   userData={ users[index]}

   />
   

   <button onClick={changeUser}>
   Abrir         
   
   </button>

   <Author
   dataAuthor={ users[index]}
   />

   </div>
  )
}

export default App