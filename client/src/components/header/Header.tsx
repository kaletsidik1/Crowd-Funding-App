import React from 'react'
import { Link } from 'react-router-dom'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export default function Header() {
  return (
    <div>
      <header className='ml-6 mt-3 flex flex-row justify-between max-w-full mr-12' >
         <div className='flex flex-row gap-1'>
           <div className='bg-gradient-to-br from-blue-600 to-blue-100 p-2 min-w-[52px] h-10 rounded-bl-[7px]'>
             <div className='bg-white ml-1 mr-1 max-w-[30px] h-4 mb-2 mt-0.5'></div>
           </div>
          <p className='text-[20px] font-bold text-blue-600  leading-none'>INOVATE <br />FUND</p>
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
         <nav >< ul className='flex flex-row gap-6 '>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>create a campain</Link></li>
            <li className='border-none bg-blue-400  p-1 rounded-[7px]'> <Link to={"/login"} >Log in</Link></li>
            </ul></nav> 
      </header>
    </div>
  )
}
