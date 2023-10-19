import React from 'react'
import Heading from '../common/Heading'

const HowItWorks = () => {
    return (
        <div className='w-full py-20 mt-20' style={{ background: "linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)" }}>
            <div className='w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
                <div className='w-full mb-10'>
                    <Heading text1={"Quality Features"} text2={"Let’s see how it works"} />
                </div>

                <div className='w-full'>
                    <div className='flex justify-between gap-24'>

                        <div>
                            <div className='py-3'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full shadow-lg'>
                                    <h2 className='text-xl font-semibold font-sans'>01</h2>
                                </div>
                            </div>

                            <div className='my-2'>
                                <h2 className='text-xl font-semibold font-sans'>Set disbursement
                                    Instructions</h2>
                            </div>
                            <p className='text-sm font-medium text-gray-600 leading-relaxed'>
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>

                        <div>
                            <div className='py-3'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full shadow-lg'>
                                    <h2 className='text-xl font-semibold font-sans'>02</h2>
                                </div>
                            </div>

                            <div className='my-2'>
                                <h2 className='text-xl font-semibold font-sans'>Assembly retrieves funds from your account</h2>
                            </div>
                            <p className='text-sm font-medium text-gray-600 leading-relaxed'>
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>

                        <div>
                            <div className='py-3'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full shadow-lg'>
                                    <h2 className='text-xl font-semibold font-sans'>03</h2>
                                </div>
                            </div>

                            <div className='my-2'>
                                <h2 className='text-xl font-semibold font-sans'>Assembly initiates disbursement</h2>
                            </div>
                            <p className='text-sm font-medium text-gray-600 leading-relaxed'>
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>

                        <div>
                            <div className='py-3'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full shadow-lg'>
                                    <h2 className='text-xl font-semibold font-sans'>04</h2>
                                </div>
                            </div>

                            <div className='my-2'>
                                <h2 className='text-xl font-semibold font-sans'>Customer receives funds payment</h2>
                            </div>
                            <p className='text-sm font-medium text-gray-600 leading-relaxed'>
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks

