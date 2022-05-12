import './App.css';
import { useState, useEffect } from 'react'

function App() {
  
  const [ships, setShips] = useState([])

  const generateShips = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`)

    const data = await response.json()
    console.log(data.results)
    // sets state to hold ship data
    setShips(data.results)
  }

  useEffect(() => {
    generateShips()
  },[])
 const allShips = ships.map((ship, idx) => {
   return(
    <div>
      {ship.name}
    </div>
   )
 })
  return (
    <div className="App">
      {allShips}
    </div>
  );
}

export default App;
