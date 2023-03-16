import { useState } from 'react'
import Axios from "axios"
import './App.css'

function App() {

  let [excuse, setExcuse] = useState(null)

  let fetchData = (category)=>{
Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) =>{
  setExcuse(res.data[0])
})
  }
  


  return (
    <main className="App">
      <h1>Generate An Excuse</h1>
      <button  onClick={()=> fetchData("family")}>Family</button>
      <button onClick={()=> fetchData("children")}>Children</button>
      <button onClick={()=> fetchData("party")}>Party</button>
      <button onClick={()=> fetchData("funny")}>Funny</button>
      <button onClick={()=> fetchData("office")}>Office</button>
      <button onClick={()=> fetchData("unbelievable")}>Unbelievable</button>
      <button onClick={()=> fetchData("developers")}>Developers</button>
      <button onClick={()=> fetchData("gaming")}>Gaming</button>

    {excuse &&   <div className="excuse">
    <p> Category - {excuse?.category.charAt(0).toUpperCase() + excuse?.category.slice(1)} : {excuse?.excuse}  </p>
      </div>}
    </main>
  )
}

export default App
