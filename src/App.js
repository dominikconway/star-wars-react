import './App.css';
import ShipDisplay from './components/ShipDisplay';
import { useState, useEffect } from 'react'


function App() {
  // initializing state to an empty array
  const [ships, setShips] = useState([])
  // fetching data from the api
  const generateShips = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`)

    const data = await response.json()
    
    //console.log(data.results)

    // sets state to hold ship data
    setShips(data)
  }

  useEffect(() => { generateShips() },[])
  
  const shipMap = ships?.results?.map((ship, index) => {
    return (
      <ShipDisplay name={ship.name} key={index} />
    )
    
  })

    return (
      <div className='App'>

        {shipMap}

      </div>
    )
  }



export default App;