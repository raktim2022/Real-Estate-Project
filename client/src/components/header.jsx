// import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function header() {
  return (
      <header className="bg-slate-200 shadow-md">
          <div className="p-3 flex justify-between items-center max-w-6xl mx-auto">
              <Link to='/'>
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500 text-[30px]">R&B </span>
                <span className="text-slate-800 px-2">Real Estate</span>
            </h1></Link>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                  <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-[304px] sw:w-34' />
                  <FaSearch className='text-slate-600'/>
              </form>
              <ul className='flex gap-5'>
                  <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
                  <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
                  <Link to='/signin'><li className=' sm:inline text-slate-700 hover:underline'>Sign in</li></Link>
              </ul>
          </div>
    </header>
  )
}
