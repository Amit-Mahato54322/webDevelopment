import { useState } from 'react'

import './App.css'
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import AddToDoItem1 from './components/AddToDoItem1'
import AddToDoItem2 from './components/AddToItem2'

function App() {
  return (
    <>
      <center className='todo-container'>

        <div class="container text-center">
          <AppName />
          <AddToDo></AddToDo>
          <AddToDoItem1></AddToDoItem1>
          <AddToDoItem2></AddToDoItem2>
        </div>
      </center>

    </>
  )
}

export default App
