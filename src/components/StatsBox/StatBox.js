import React from 'react'

export default function StatBox(infoPack) {
    const firstPack = infoPack[0];
    const secondPack = infoPack[1];

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
                    AFK: {firstPack.infractions.afk}<br/>
                    LEAVER: {firstPack.infractions.leaver}<br/>
                    NIE ZAGRAŁ: {firstPack.infractions.qm_not_checkedin}<br/>
                    WYKICKOWANY: {firstPack.infractions.qm_not_voted}<br/>
                    
                </div>

                <div className='text-left flex flex-col pr-5'>
                <span>INGAME NICK: {firstPack.games.csgo.game_player_name}</span>
                <span>LVL FACEIT: {firstPack.games.csgo.skill_level_label}</span>
                <span>ELO FACEIT: {firstPack.games.csgo.faceit_elo}</span>
                <span>STATUS KONTA: {firstPack.memberships[0]}</span>
                </div>
             
                <div className='text-left flex flex-col pr-5'>
                    <span>ROZEGRANYCH GIER: {secondPack.lifetime["Matches"]}</span>
                    <span>WYGRANE GRY: {secondPack.lifetime["Wins"]}</span>
                    <span>WYGRANYCH W %: {secondPack.lifetime["Win Rate %"]}%</span>
                    <span>TOP SERIA: {secondPack.lifetime["Longest Win Streak"]}</span>
                </div>

                <div className='text-left flex flex-col pr-5'>
                    <span>OSTATNIE 5 MECZY</span>
                    <span>WYNIKI : {scoreDisplay(secondPack.lifetime["Recent Results"])}</span>
                    <span>K/D: {secondPack.lifetime["Average K/D Ratio"]}</span>
                    <span>HS%: {secondPack.lifetime["Average Headshots %"]}%</span>
                </div>

                <div className='text-left flex flex-col pr-5'>
                    <span>OSTATNIA GRA</span>
                    
                </div>
                
            </div>
        </div>
    )
}
