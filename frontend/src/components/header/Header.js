import React from 'react'

const Header = () => {
    return (
        <div className='w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
            <div className='w-full py-4 flex justify-between items-center'>
                <div className='flex items-center justify-center gap-2'>
                    <img src='/images/logo.png' className='w-[30px]' />
                    <h2 className='lg:text-2xl font-bold text-color2'>LandGuru</h2>
                </div>
                <div>
                    <ul className='flex gap-6 text-md font-medium text-color2 justify-center items-center'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Adertise</li>
                        <li className='cursor-pointer'>Supports</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className="px-4 py-2 rounded-md text-color4 text-md font-semibold bg-[#FCF2E8]">
                        Try For Free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header