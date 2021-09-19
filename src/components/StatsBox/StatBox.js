import React from 'react'

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
                    AFK: {playerInfo.afk}<br/>
                    LEAVER: {playerInfo.leaver}<br/>
                    NIE ZAGRAŁ: {playerInfo.qm_not_checkedin}<br/>
                    WYKICKOWANY: {playerInfo.kicked}<br/>
                    
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

               
                
            </div>
        </div>
    )
}
