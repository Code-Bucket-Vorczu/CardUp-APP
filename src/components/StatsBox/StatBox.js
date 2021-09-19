import React from 'react'
import {mapSinffer} from '../../status/Maps.js';
import {UnixToDate} from '../../status/DateTime.js'

export default function StatBox(props) {
    const playerInfo = props.playerInfo;
    const statsInfo = props.playerStats;
    const lastMatchInfo = props.lastMatchInfo;


    const scoreDisplay = scoreObj =>{
        const score = []
        scoreObj.forEach(element => {
            score.push(element === "1"? 'W ' : 'L ') ; 
        });

        return score;
    }
    return (
        <div>
            <div className=' bg-red-400 pt-1 flex rounded-xl cursor-pointer  mt-5 text-right pl-8 pr-8 -mb-9 w-24 h-10'>
                FACEIT
            </div>
            <div className='w-100 bg-red-400 p-3 flex rounded-xl cursor-pointer  mt-5 '>
                <div className='text-left flex flex-col pr-10'>
                    AFK: {playerInfo.infraction_pack.afk}<br/>
                    LEAVER: {playerInfo.infraction_pack.leaver}<br/>
                    NIE ZAGRAŁ: {playerInfo.infraction_pack.que_not_checkedin}<br/>
                    WYKICKOWANY: {playerInfo.infraction_pack.kicked}<br/>
                    
                </div> 

                <div className='text-left flex flex-col pr-5'>
                <span>INGAME NICK: {playerInfo.nickname}</span>
                <span>LVL FACEIT: {playerInfo.accLvl}</span>
                <span>ELO FACEIT: {playerInfo.elo}</span>
                <span>STATUS KONTA: {playerInfo.membership}</span>
                </div>
             
                <div className='text-left flex flex-col pr-5'>
                    <span>ROZEGRANYCH GIER: {statsInfo.totalMatches}</span>
                    <span>WYGRANE GRY: {statsInfo.totalWins}</span>
                    <span>WYGRANYCH W %: {statsInfo.totalWinRatio}%</span>
                    <span>TOP SERIA: {statsInfo.longestWinStreak}</span>
                </div>

                <div className='text-left flex flex-col pr-5'>
                    <span>OSTATNIE 5 MECZY</span>
                    <span>WYNIKI : {scoreDisplay(statsInfo.lastFiveMatches)}</span>
                    <span>K/D: {statsInfo.totalKD}</span>
                    <span>HS%: {statsInfo.totalHsProc}%</span>
                </div>
                
                <div className='text-left flex flex-col pr-5'>
                    <span>OSTATNI MECZ: {lastMatchInfo.mapPicked[0]}</span>
                    <img src={mapSinffer(lastMatchInfo.mapPicked[0]).img_Url} width='180px' alt="info" className=' relative w-32 h-20 border-2 border-gray-100 hover:border-gray-500'/>
                </div>

                <div className='text-left flex flex-col pr-5'>
                    <span>INFO: {lastMatchInfo.matchTypeName} {lastMatchInfo.matchType} BY - {lastMatchInfo.organizer} </span>  

                    <span>DATA: {UnixToDate(lastMatchInfo.startDate).fullDate}</span>  
                    <span>GODZINA STARTU: {UnixToDate(lastMatchInfo.startDate).fullTime}</span>  


                </div>
               
                
            </div>
        </div>
    )
}
