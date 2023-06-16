import React from 'react'

function Hero() {
    return (
        <div className={`min-h-screen w-full flex flex-col justify-center items-center space-y-4 bg-[url('/hero.png')] bg-no-repeat bg-center bg-cover mx-auto text-center`}>

            <h2 className='text-6xl text-black font-bold max-w-xl heading'>One membership for fitness, wellness and beauty</h2>
            <p className='max-w-lg mx-auto font-medium mb-2'>Join ClassPass to try at-home workouts, in-studio classes and wellness treatments like haircuts
            </p>
            <div className='flex justify-between items-center space-x-6'>
                <button className='bg-[#05f] border border-[#05f] hover:bg-blue-600 shadow-sm shadow-blue-700 text-white px-4 py-3 rounded-sm'>Get started</button>
                <button className='bg-transparent hover:bg-gray-300 border-1 border border-[#05f] text-[#05f] px-4 py-3 rounded-sm'>Explore nearby options</button>
            </div>
        </div>

    )
}

export default Hero