import'./App.css'
import { useState } from 'react'
function Hero(){
    return(
    <div>
        <div className='flex flex-col'>
        <p className='text-center text-white relative top-12 text-7xl'>VirtualR build tools for</p>
        <p className='text-center text-orange-700 relative top-12 text-7xl'>developers</p>
        <p className='text-center text-gray-500 relative top-20 text-xl'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools.</p>
        <p className='text-center text-gray-500 relative top-20 text-xl'>Get started today and turn your imagination into immersive reality!</p>
        <div className='flex justify-center gap-3'>
            <a href='#' className='border-orange-700 rounded-md p-2  bg-orange-700 relative top-24 hover:bg-orange-900'>Start for free</a>
            <a href='#' className='border rounded-md p-2 relative top-24 hover:text-black hover:bg-white'>Documentation</a>
        </div>
        </div>
        

    </div>);
}
export default Hero
