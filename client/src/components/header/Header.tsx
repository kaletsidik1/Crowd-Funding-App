import React from 'react'
import { Link } from 'react-router-dom'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <div className='w-full  m-0 p-0'>
      <header className='flex flex-row justify-between items-center w-full px-6  '>
        <div>
          <img src={logo} alt="InnovateFund Logo" className='w-[150px] h-auto'/>
        </div>

        <div className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 focus-within:ring-2 focus-within:ring-blue-500 w-[660px]">
          <div>
            <SearchTwoToneIcon className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            className="flex-grow bg-transparent outline-none"
          />
        </div>

        <nav className='mt-2'>
          <ul className='flex flex-row gap-6 items-center'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>create a campaign</Link></li>
            <li className='border-none bg-blue-400 p-1 rounded-[7px]'>
              <Link to={"/login"}>Log in</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}