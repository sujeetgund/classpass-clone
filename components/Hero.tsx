import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className={`min-h-screen w-full flex flex-col justify-center items-center space-y-4 bg-[url('/hero.png')] bg-no-repeat bg-cover bg-fixed mx-auto text-center`}>

            <h2 className='text-7xl text-black font-bold max-w-2xl'>One membership for fitness, wellness and beauty</h2>
            <p className='max-w-lg mx-auto font-medium'>Join ClassPass to try at-home workouts, in-studio classes and wellness treatments like haircuts</p>
            <div className='flex justify-between items-center space-x-6'>
                <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-md'>Get started</button>
                <button className='bg-transparent border-1 border border-blue-700 text-blue-700 px-4 py-3 rounded-md'>Explore nearby options</button>
            </div>
        </div>

    )
}

export default Hero