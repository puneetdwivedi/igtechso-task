import React from 'react'
import Heading from '../common/Heading'
import FaqAccordian from './FaqAccordian'

const FAQ = () => {
    return (
        <div className='mt-20 w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
            <div className='w-full'>
                <div className='w-full mb-10 '>
                    <Heading text1={"Quality Features"} text2={"Do you have any question"}/>
                </div>
                <div className='w-3/5 mx-auto'>

                <FaqAccordian />
                </div>
            </div>
        </div>
    )
}

export default FAQ