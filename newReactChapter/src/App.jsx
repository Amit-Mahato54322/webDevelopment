import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App(){
  let foodList = ['Apple', 'Mango', 'Orange']
  return(<>
   <div>
     <ul className="list-group">
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