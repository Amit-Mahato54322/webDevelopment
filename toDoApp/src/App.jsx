import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center className='todo-container'>
        <h1>ToDo App</h1>

        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder='Enter to do'/>
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
            </div>
          </div>
          {/* second row */}

          <div class="row">
            <div class="col-6">
              <p>buy milk</p>
            </div>
            <div class="col-4">
              04/10/2025
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>

          {/* third row */}

          <div class="row">
            <div class="col-6">
              <p>go to college</p>
            </div>
            <div class="col-4">
              05/10/2025
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">delete</button>
            </div>
          </div>
        </div>
      </center>

    </>
  )
}

export default App
