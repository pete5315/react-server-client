import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [creatureList, setCreatureList] = useState([]);

  const fetchCreatures = () => {
    axios({
      method : 'GET',
      url: '/creature'
    }).then( response => {
      console.log(response);
    }).catch( (err) => {
      console.log(err);
    })
  }

  
  
  return (
    <div>
      <ul>
        {creatureList.map(creature => (
          <li key={creature.name}>
            {creature.name} is from {creature.origin}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App
