import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import StarshipCard from './component/StarshipCard.jsx'
export default function App() {
  // state to hold the ship data
  const [ship, setShip] = useState([]);
  // use the apiKey and symbol variables to make our url
  // const url = "https://swapi.dev/api/starships/";

  // function to fetch ship data
  const getship = async () => {
      try {
          // console.log(url)
          const response = await fetch("https://swapi.dev/api/starships/");
          const data = await response.json();
          console.log(data);
          setShip(data.results);
          console.log(data.results);
      } catch (e) {
          console.error(e);
      }
  }
  const shipCard = ship && (ship.map((element)=>{return <StarshipCard shipName = {element.name}/>}))

  // useEffect to run getship when component mounts
  useEffect(() => {
      getship();
  }, []);


  return (
   
   <div>
     <header style={{ position:'fixed',top:'0',left:'0',right:'0',border: '1px solid #ccc', padding: '5px', margin: '5px', borderRadius: '8px' , backgroundColor:'gray',textAlign:'center'}}>
      <h2>Star Wars Starships</h2></header>
      <div className = "card-container">
      {ship.map((card, index) =>(
      <div key = {index} style={{boxSizing:'border-box', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' , backgroundColor:'gray',textAlign:'center',width:'calc(25% - 20px)'}}>  
      <h3>{card.name}</h3>
        </div> 
        ))}
   </div>
   </div>
  );
}
