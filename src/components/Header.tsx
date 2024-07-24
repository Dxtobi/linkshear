import React from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white md:my-4 md:w-[90%] m-auto rounded-md  w-full">
      <div className="flex items-center gap-2">
        <span className='p-2 rounded-lg bg-purple-500 text-purple-50'><AiOutlineLink size={24} color='white' /></span>
        <span className="font-bold text-gray-800 hidden md:block">devlinks</span>
      </div>
      <div className="flex items-center gap-4">
       <a href='/' className="text-purple-500 font-bold hover:underline flex gap-3 items-center bg-purple-100 px-6 py-2 rounded-lg "> 
        <span><AiOutlineLink size={24} /></span> 
        <span className="hidden md:block">links</span></a>
       <a href='/profile' className="text-gray-700 font-bold hover:underline flex gap-3 items-center bg-gray-200 px-6 py-2 rounded-lg"> <span><CgProfile size={24} /></span> <span className=" hidden md:block">Profile</span></a>
      </div>
      <button className="border-2 border-purple-500 text-purple-500 py-1 px-4 rounded-lg hover:bg-purple-500 hover:text-white">
        Preview
      </button>
    </div>
  );
}

export default Header;
