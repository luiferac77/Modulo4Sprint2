import React from 'react';

const Footer = ({modulo, nombre}) => {
  return (
    <footer className='bg-gray-900 text-white/80 font-semibold text-sm w-full mt-auto'>
        <div className='flex justify-between container mx-auto h-28 py-10'> 
            <div>{modulo}</div>
            <div>{nombre}</div>
        </div>
    </footer>
  )
}

export default Footer