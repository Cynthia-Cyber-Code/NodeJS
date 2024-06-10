// App.js
import './App.css'
import {useState, useEffect} from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJDb3JlbnRpbk1AbWFpbC5jb20iLCJ1c2VyUGFzc3dvcmQiOiIkMmIkMTAkcFpOLjVRSjliNE1IdzU4alJKdjJILnF4WHRaRGJCQ3lLSTN4b000dThiM2tvd1NNc2dudy4iLCJ1c2VyUm9sZSI6ImlzQWRtaW4iLCJpYXQiOjE3MTA0MjQ1NTUsImV4cCI6MTcxMDUxMDk1NX0.40iSmPOLQ1twM5Hd-adqVwC2wRXA1rsVaDgAP5bvnA0"

  useEffect(() => {
    // fetch
    fetch("http://localhost:8080/api/reservations/", {
      method: "GET",
      headers: {
        "Authorization" : token,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setReservations(data)
    })
}, []);

  return (
    <>
      <h1>Front-End</h1>
      <p className="paragraph">1ere partie</p>
      <ul className="reservationContainer">
        {reservations.map((r) => {
          return (
            <li className="reservation" key={r.id}>
              <div>Nombre de clients : {r.numberOfCustomers}</div>
              <div>Reservé par : {r.reservationName}</div>
              <div>Note : {r.reservationNote}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App