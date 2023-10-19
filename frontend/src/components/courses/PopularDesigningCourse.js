import React from 'react'
import Heading from '../common/Heading'

import PopularDesginCourseCard from './PopularDesginCourseCard'

const PopularDesigningCourse = () => {
    return (
        <div className='mt-20 w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
            <div className='w-full mb-6'>
                <div className='mb-10'>
                    <Heading text1={"Quality Features"} text2={"Popular Desgining Courses"} />
                </div>

                <div>
                    <PopularDesginCourseCard />
                    <PopularDesginCourseCard />
                    <PopularDesginCourseCard />
                    <PopularDesginCourseCard />

                </div>
            </div>

        </div>
    )
}

export default PopularDesigningCourse