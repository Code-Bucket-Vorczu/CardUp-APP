import React from 'react'
import StatBox from '../StatsBox/StatBox'
import {countrySinffer} from '../../status/Countries'
import MapBox from '../MapBox/MapBox'

   

export default function Player(props) {

    const playerInfo = props.playerInfo;
    const statsInfo = props.playerStats
    
    return (
        
        <div className='bg-gray-800 p-5 rounded-lg filter w-full drop-shadow-lg m-5 text-white font-bebas ... '>

            <div className='w-100 bg-red-400 p-3 flex rounded-xl cursor-pointer hover:bg-red-300'>
                <div className='pr-5' >
                    <img className='rounded-lg' src={playerInfo.avatar} width='100px'/>
                </div>
                <div className='text-left flex flex-col'>
                    <span>NICK: {playerInfo.nickname}</span>  
                    <span className='flex'>KRAJ: 
                    <img 
                        src={countrySinffer(playerInfo.country).flagUrl} 
                        width='20px' 
                        alt={countrySinffer(playerInfo.country).name} 
                        className='ml-2'/></span>
                    <span>STEAM NICK: {playerInfo.nickname}</span>
                    <span>STEAM ID: {playerInfo.steamId}</span>
                </div>
                
            </div>

           <StatBox {...props}/>
           <MapBox {...props} />
            
            
        </div>
    )
}


// "new_steam_id": "[U:1:133153352]",
// "steam_id_64": "76561198093419080",
// "steam_nickname": "$tyle ♥ Ola",
// "membership_type": "premium",
// "memberships": [
//   "premium"