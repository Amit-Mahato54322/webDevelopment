import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <>
      <center>
        <ClockHeading />
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </>
  )
}
export default App
