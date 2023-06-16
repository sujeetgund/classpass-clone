import React from 'react'
import Image from 'next/image'

function Mobileapp() {
    return (
        <div className='bg-[#111111] my-7'>
            <div className='max-w-5xl mx-auto flex justify-center items-center'>
                <div className='flex-col justify-center items-center space-y-2'>

                    <h3 className='font-semibold text-4xl heading text-white'>Prioritizing your safety during COVID-19</h3>
                    <p className='text-white'>Our partners are implementing new guidelines to protect your health and safety like reducing class sizes and frequently cleaning equipment. Learn more information about partner safety & cleanliness directly in the app.</p>
                    <div className='flex justify-start items-center'>
                        <a href='https://itunes.apple.com/us/app/classpass/id912947244?mt=8&uo=4' target='_blank' >
                            <img src="/appstore.png" alt="" width={130} />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.classpass.classpass' target='_blank' >
                            <img src="/playstore.png" alt="" width={130} />
                        </a>
                    </div>

                </div>

                <img src='/mobile-app.png' alt='ClassPass Mobile App' width={300} />
            </div>
        </div>
    )
}

export default Mobileapp