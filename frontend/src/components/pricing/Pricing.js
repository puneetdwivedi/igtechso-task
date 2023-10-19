import React, { useState } from 'react'
import Heading from '../common/Heading'

const Pricing = () => {

    const [selectedPlan, setSelectedPlan] = useState(1);
    return (
        <div className='mt-20 w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
            <div className='w-full'>
                <div className='mb-10'>
                    <Heading text1={"Quality Features"} text2={"Choose your pricing policy"} />
                </div>

                <div className='w-full mb-10'>
                    <div className='mx-auto w-max p-1  bg-gray-100 rounded-sm text-sm font-medium'>
                        <button onClick={()=>{
                            setSelectedPlan(1)
                        }} className={`px-4 py-2 ${selectedPlan ==1?"bg-white shadow-md":""} rounded-md`}>Monthly Plan</button>
                        <button onClick={()=>{
                            setSelectedPlan(2)
                        }} className={`px-4 py-2 ${selectedPlan ==2?"bg-white shadow-md":""} rounded-md`}>Annual Plan</button>
                    </div>
                </div>

                <div className='w-4/5 mx-auto'>
                    <div className='w-full flex gap-5'>

                        {/* section left */}
                        <div className='w-1/2 rounded-md p-10 border'>
                            <div className='my-2 w-full mb-8'>
                                <h2 className='text-xl font-semibold font-sans'>Free Plan</h2>
                                <p className='text-sm font-medium text-gray-700'>For similar teams</p>
                            </div>
                            <div>

                                <ul>
                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>


                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1_510)">
                                                        <path d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z" fill="#CED7E1" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_510">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1_510)">
                                                        <path d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z" fill="#CED7E1" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_510">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div className='w-full flex items-center justify-center mt-16'>
                                <button className=" px-4 py-2 rounded-md text-color4 text-md font-semibold bg-[#FCF2E8]">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                        <div className='w-1/2 rounded-md p-10 border'>
                            <div className='my-2 w-full mb-8'>
                                <h2 className='text-xl font-semibold font-sans'>Free Plan</h2>
                                <p className='text-sm font-medium text-gray-700'>For similar teams</p>
                            </div>
                            <div>

                                <ul>
                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>


                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>

                                    <li className='mb-4'>
                                        <div className='flex gap-4'>
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z" fill="#3FDBB1" />
                                                </svg>
                                            </div>
                                            <p className='text-sm font-normal text-gray-700 leading-relaxed'>
                                                Ultimate access to all course, exercises and assessments
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className='w-full flex items-center justify-center mt-16'>
                                <button className=" px-4 py-2 rounded-md text-color4 text-md font-semibold bg-[#FCF2E8]">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div >
    )
}

export default Pricing