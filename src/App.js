import './App.scss';
import "tailwindcss/tailwind.css"

import {mockSinglePlayerApiData} from './Mock/SingleplayerApiRes.js'
import { useEffect, useRef, useState } from 'react';
import Player from './components/Player/Player';
import Axios from 'axios';
import SearchAlert from './components/UI/SearchAlert/SearchAlert';



function App() {
  const [isCallOK, setisCallOK] = useState({
    callStatusOk: true,
    callStatusCode:'',
  })
  const [incPlayerData, setincPlayerData] = useState([])
  const [lookinForPlayer, setlookinForPlayer] = useState({
    id: null,
    name: ''
  })



  const ShowWarning = () =>{
    return(
      <></>
    );
  }

  const APIDataCallGet = () =>{
    GetPlayerAllLeaguesInfo(lookinForPlayer.name) 

  }
  
  const GetPlayerAllLeaguesInfo =  async data =>{
    console.log( ' GETTIN: ' +  data)
    const response = await Axios.get(`http://localhost:3000/api/usercard/${data}`)  
    if(response.data !== 404){
      const localData = [...incPlayerData]
        localData.push(response.data)
        setincPlayerData(localData)
         
    } else {
      setisCallOK({callStatusOk: false, callStatusCode: response.data});
      console.log(isCallOK);
    }
        
  }

  const onAlertCloseHandler = () =>{
    setisCallOK({callStatusOk: true, callStatusCode: ''})
  }
  

  const GetUserLastMatches =  async data =>{
    console.log( ' GETTIN: ' +  data)
     const response = await Axios.get('http://localhost:3000/api/match')   
        const localData = [...incPlayerData]
        localData.push(response.data)
        setincPlayerData(localData) 
  }

  return (
    <div className="App">      

      
      <div className='mt-4'>
      <input 
        className='mb-6 p-2 border-2 rounded-lg'
        type='text'
        value={lookinForPlayer.name}
        onChange={e => setlookinForPlayer({name: e.target.value})} />

      <button 
        className='ml-2 p-2 bg-gray-800 text-white rounded-lg w-40'
        onClick={APIDataCallGet}
      >ŚLEDŹ GRACZA!</button>
      </div>
      {isCallOK.callStatusOk? <></>: <SearchAlert {...isCallOK} onAlertClose={onAlertCloseHandler}/>}
      {incPlayerData.map(el => <Player {...el[0]} />)}
      {/* <Player {...mockSinglePlayerApiData()} />  */}

      
      

      
    </div>
  );
}

export default App;
