import React from 'react'

 

export default function Player(props) {
    return (
        <div>
            <img src={props.avatar} width='100px'/>
            {console.log(props)}<br/>
            NICK: {props.nickname}<br/>
            KRAJ: {props.country}<br/>
            AFK: {props.infractions.afk}<br/>
            LEAVER: {props.infractions.leaver}<br/>
            NIE ZAGRAŁ: {props.infractions.qm_not_checkedin}<br/>
            WYKICKOWANY: {props.infractions.qm_not_voted}<br/>

            CSGO!<br/>
            LVL FACEIT: {props.games.csgo.skill_level_label}<br/>
            ELO FACEIT: {props.games.csgo.faceit_elo}<br/>
            INGAME NICK: {props.games.csgo.game_player_name}<br/>
            STEAM NICK: {props.steam_nickname}<br/>
            MAŁPA PREMIUM ?: {props.memberships[0]}<br/> 
        </div>
    )
}


// "new_steam_id": "[U:1:133153352]",
// "steam_id_64": "76561198093419080",
// "steam_nickname": "$tyle ♥ Ola",
// "membership_type": "premium",
// "memberships": [
//   "premium"