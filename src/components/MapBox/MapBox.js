import React from 'react'
import SingleMap from './SingleMap/SingleMap';





export default function MapBox(infoPack) {
    const secondPack = infoPack[1].segments;


    

    return (
        <div>
            <div className=' bg-red-400 pt-1 flex rounded-xl cursor-pointer  mt-5 text-right pl-8 pr-8 -mb-9 w-24 h-10'>
                RANDOM
            </div>           
            

            <div className='w-100 bg-red-400 p-3 flex rounded-xl cursor-pointer  mt-5 flex-wrap justify-between'>
                {secondPack.map(el => el.mode === "5v5"? <SingleMap {...el}/> : <></>)}
            </div>


            <div className=' bg-red-400 pt-1 flex rounded-xl cursor-pointer  mt-5 text-right pl-8 pr-8 -mb-9 w-24 h-10'>
                PREMADE
            </div> 
            <div className='w-100 bg-red-400 p-3 rounded-xl cursor-pointer  mt-5 flex-wrap justify-between'>
                <span>PREMADE</span>
                <div className='flex '>
                {secondPack.map(el => el.mode !== "5v5"? <SingleMap {...el}/> : <></>)}
                </div>
            </div>
        </div>
    )
}
