import React from 'react'
import RatingStars from '../common/RatingStars'

const Hero = () => {
    return (
        <div className='w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4 pt-16 pb-12'>
            <div className='w-full flex justify-between gap-5 items-center'>
                <div className='text-color2 pr-[100px] w-1/2'>

                    <div className='text-sm font-medium flex gap-3  mb-6'>
                        <div className='flex space-x-1'>
                            <RatingStars color={"text-color1"} />
                            <RatingStars color={"text-color1"} />
                            <RatingStars color={"text-color1"} />
                            <RatingStars color={"text-color1"} />
                            <RatingStars color={"text-gray-200"} />

                        </div>
                        <span>Trused by over 4,332 students</span>
                    </div>

                    <div className='mb-10'>
                        <div className='relative w-full'>
                            <h2 className='text-6xl font-bold w-full'>Learn Design
                                with Nia Matos</h2>
                            <div className='w-2/3 absolute right-0 -bottom-5'>
                                <img src='/images/hero-orange-line.png' />
                            </div>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <p className='font-medium text-md'>
                            Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever.
                        </p>
                    </div>

                    <div className='mb-8'>
                        <div className='w-full bg-white flex rounded-md overflow-hidden'>
                            <input className='p-3 text-gray-500 text-sm w-full focus-visible:outline-none' placeholder='Search Course Name' />
                            <button className='px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='w-full text-sm font-medium text-gray-500 flex gap-4 items-center'>
                        <span>Sponsered By : </span>
                        <div className='flex gap-4 items-center'>
                            <button className='w-[90px]'>
                                <img src='/images/paypal.png' className='w-full' />
                            </button>
                            <button className='w-[90px]'>
                                <img src='/images/google.png' className='w-full' />
                            </button>
                            <button className='w-[90px]'>
                                <img src='/images/dropbox_logo.png' className='w-full' />
                            </button>

                        </div>
                    </div>


                </div>
                <div className='w-1/2 '>
                    <div className='w-full relative'>
                        <div className='w-full relative z-[1] pt-[5%]'>
                            <img src="/images/hero_right_image.png" className='w-[65%] mx-auto' />
                            <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center'>
                                <button className='w-[80px] h-[80px] p-5 bg-[rgba(255,255,255,0.5)] rounded-full'>
                                    <img src='/images/hero_play-button.png' className='w-full' />
                                </button>
                            </div>
                        </div>
                        <div className='w-max h-max absolute right-0 top-0'>
                            <img src="/images/hero_right_pattern.png" className='-z-[1] w-[65%] mx-auto' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero