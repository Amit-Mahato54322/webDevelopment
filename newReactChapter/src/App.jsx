import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App(){
  let foodList = []
  let emptyMessage = foodList.length == 0? <h3>There's no food</h3>:null
  return(<>
   <div>
     <ul className="list-group">
      {emptyMessage}
      {/* I was using a curly braces and not returning anything, which was causing the main issue, so i changed it to () to implicitly return the jsx */}
      {foodList.map((item) =>(
        <li key = {item} className="list-group-item">{
          item
        }</li>
      ))}
     </ul>
   </div>
  </>)
}
export default App