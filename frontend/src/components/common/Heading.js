import React from 'react'

const Heading = ({text1, text2}) => {
  return (
    <div className='w-full text-center'>
        <p className='text-lg font-medium text-color4 mb-1'>{text1}</p>
        <h2 className='text-3xl font-semibold text-color2 font-sans'>{text2}</h2>
    </div>
  )
}

export default Heading