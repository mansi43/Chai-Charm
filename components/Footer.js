import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-gradient-to-r from-purple-800 from-10% via-purple-700 via-40% to-pink-300 to-95% flex  py-1 justify-center items-center text-slate-200 h-8 w-screen'>
      <p className='font-semibold text-sm text-center'>Copyright &copy; {currentYear} Chai Charm - All rights reserved!</p>
    </footer>
  )
}

export default Footer
