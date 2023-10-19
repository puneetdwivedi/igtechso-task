import React from 'react'
import RatingStars from '../common/RatingStars'

const PopularDesginCourseCard = () => {
    return (

            <div className='mb-5'>
                <div className='w-full flex gap-6 justify-between items-center border rounded-lg py-3 px-5'>
                    <div>
                        <div className='p-4 rounded-full bg-[#FCF2E8]'>
                            <img src='/images/orange_play_btn.png' className='' />
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <div className='text-sm font-medium flex gap-3 '>
                                <div className='flex space-x-1'>
                                    <RatingStars color={"text-yellow-300"} />
                                    <RatingStars color={"text-yellow-300"} />
                                    <RatingStars color={"text-yellow-300"} />
                                    <RatingStars color={"text-yellow-300"} />
                                    <RatingStars color={"text-gray-200"} />

                                </div>
                                <span className='text-gray-600'>5.0 (392 views)</span>
                            </div>
                            <p className='text-[12px] font-medium leading-relaxed text-gray-600 flex items-center gap-2'>
                                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_601)">
                                        <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_601">
                                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>
                                <span>2,538 students watched</span>
                            </p>
                        </div>

                        <h2 className='text-lg font-semibold font-sans my-2'>How to work with prototype design with adobe xd featuring tools</h2>
                        <p className='text-sm text-gray-600 font-medium'>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>

                    </div>

                    <div>
                        <div className='px-4 py-2 bg-[#3FDBB1] flex text-color5 text-sm font-medium rounded-md'>
                            <div className='border-r border-r-white pr-2'>
                                7 Video Classes
                            </div>
                            <div className='pl-2'>4 Hrs</div>

                        </div>
                        <div></div>
                    </div>


                </div>

            </div>
       
    )
}

export default PopularDesginCourseCard