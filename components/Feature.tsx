import React from 'react'

function Feature() {

    const features = [
        {
            title: 'In-studio classes',
            description: 'Book indoor or outdoor classes at the best studios and gyms near you',
            image: '/In-studio classes.svg'
        },
        {
            title: 'Salon & spa appointments',
            description: 'Take a rest day and use your credits to book a massage, haircut and more',
            image: '/lotus.svg'
        },
        {
            title: 'Digital classes',
            description: 'Try on-demand classes from top-rated studios',
            image: '/digital-classes.svg'
        }
    ]
    return (
        <div className=' my-7 flex-col justify-center items-center max-w-xl mx-auto text-center'>
            <div className='flex-col justify-center items-center space-y-3'>
                <h3 className='font-semibold text-4xl'>What can I book with ClassPass?</h3>
                <p>Find a class or appointment with one app — subject to availability in your area</p>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Feature