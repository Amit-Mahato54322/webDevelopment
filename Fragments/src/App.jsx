import React from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Chicken", "Potato", "Roti", "Salad", "Milk"]

  return (
    <>  {/* This part is known as fragments*/}
      <h1>Healthy Food</h1>
      <ul className='list-group'>
        {foodItems.map(
          item => <li key={item  } className='list-group-item'>{item}</li>
          )}
      </ul>
    </>
  )
}

export default App
