import './App.scss';

import { useEffect, useRef, useState } from 'react';
import Player from './components/Player/Player';
import Axios from 'axios';



const mocketPlayersNames = [{
  id: 1,
  name: 'mr_eMS'
},
{
  id: 2,
  name: 'Bluu_e'
},
{
  id:3,
  name: 'Chrispeusz'
}
]

function App() {

  const [incPlayerData, setincPlayerData] = useState([])
  const [lookinForPlayer, setlookinForPlayer] = useState({
    id: null,
    name: ''
  })


  const APIDataCallGet = () =>{
    GetAndUpdateData(lookinForPlayer.name)  
  }
  
  // const APIDataCallGet2 = () =>{
  //   GetAndUpdateData2(lookinForPlayer.name)  
  // }
  const GetAndUpdateData =  async data =>{
    console.log( ' GETTIN: ' +  data)
     const response = await Axios.get('http://localhost:3000/api/usercard')   
        const localData = [...incPlayerData]
        localData.push(response.data)
        setincPlayerData(localData) 
  }

  // const GetAndUpdateData2 =  data =>{
  //   console.log( ' GETTIN: ' +  data)
  //    authAxios.get(`https://open.faceit.com/data/v4/players/${data}/history?game=csgo&offset=0&limit=5`).then(
  //     (response) => {    
  //       console.log(response)    
  //       // const localData = [...incPlayerData]
  //       // localData.push(response.data)
  //       // setincPlayerData(localData)
  //     }
  //   )    
  // }


  

  const testCall = () =>{
    console.log(...incPlayerData)
  }


  useEffect(() => {
    console.log( ' CHECKIN: ' +  incPlayerData.data)
  }, [incPlayerData])
   


  return (
    <div className="App">      
      
      <input 
        type='text'
        value={lookinForPlayer.name}
        onChange={e => setlookinForPlayer({name: e.target.value})} />
      <button onClick={APIDataCallGet}>CLICK</button><br/><br/>
      {/* <button onClick={APIDataCallGet2}>CLICK 222</button><br/><br/> */}
      {incPlayerData.map(el => <Player {...el} />)}
    </div>
  );
}

export default App;
