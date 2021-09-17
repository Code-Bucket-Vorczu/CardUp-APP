import React from 'react'

export default function SingleMap(props) {

    return (
        <div className='flex flex-col'>                
                <div className='h-24'>
                    <img src={props.img_regular}  className=' relative w-32 h-20 border-2 border-gray-100 hover:border-gray-500'/> 
                    <span>{props.label}</span>
                </div>

                <div className='text-left flex flex-col p-2'>                
                 <span>ROZEGRANA: {props.stats['Matches']}</span>     
                 <span>WYGRANYCH: {props.stats['Win Rate %']}%</span>   
                 <span>FRAGI: {props.stats['Kills']}</span> 
                 <span>K/D:  {(props.stats['Kills'] / props.stats['Deaths']).toFixed(2)}</span> 
                 <span>K/D/A:  {((Number(props.stats['Kills']) + Number(props.stats['Assists'])) / Number(props.stats['Deaths'])).toFixed(2)}</span> 
                </div>      

                <div className='text-left flex flex-col p-2'>   
                <div className='h-6 text-center'>
                <span>SERIE</span>  
                </div> 
                            
                 <span>x3: {props.stats['Triple Kills']}</span>     
                 <span>x4: {props.stats['Quadro Kills']}</span>   
                 <span>x5: {props.stats['Penta Kills']}</span> 
                 <span>HS NA MECZ: {props.stats['Headshots per Match']}</span> 
                 <span>MVP: {props.stats['MVPs']}</span> 
                 
                </div>       
        </div>
    )
}
