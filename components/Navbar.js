"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='bg-gradient-to-r from-purple-950 from-10% via-purple-900 via-40% to-pink-400 to-95% flex flex-row justify-between items-center gap-5 px-4 md:px-10  text-white md:h-16 w-full'>
      <Link href="/" className="logo font-bold flex items-center">
        <span className=' text-2xl md:text-4xl custom-text'>ChaiCharm!</span>
        <span><Image src="/images/chai.gif" width={50} height={100} alt="logo" className='pb-2.5 md:pb-4 w-[35px] md:w-[50px]' /></span>
      </Link>
      <div className=''>
        {session && <> <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => {
          setTimeout(() => {
            setshowdropdown(false)
          }, 300);
        }} className="mx-3 flex items-center custom-button" type="button">
          <span className='rounded-xl font-bold text-[14px] md:text-[17px] md:block hidden'>Welcome {session.user.name}</span>
          <svg className="w-2.5 h-2.5 md:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
          <div id="dropdown" className={` ${showdropdown ? "" : "hidden"} absolute z-10 divide-gray-100 bg-purple-50 rounded-lg shadow w-30 md:w-48 mt-2 right-4 md:right-[60px]`}>
            <ul className="text-sm md:text-lg font-bold  text-purple-950">
              <li>
                <Link href="/" className="block px-4  md:py-2 hover:bg-pink-100 hover:rounded-md">Home Page</Link>
              </li>
              <li>
                <Link href="/dashboard" className="block px-4 md:py-2 hover:bg-pink-100 hover:rounded-md ">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 md:py-2 hover:bg-pink-100 hover:rounded-md">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={signOut} className="block px-4 md:py-2 hover:bg-pink-100 hover:rounded-md">Log out</Link>
              </li>
            </ul>
          </div>
        </>
        }
        {!session && <Link href={"/loginpage"} target='_parent'>
          <button type="button" className="custom-button  rounded-xl md:m-2 font-bold " >Login</button>
        </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
