import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io'

const Navbar = ({searchTerm, setSearchTerm}) => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-2 md:gap-5 w-full  pt-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-medium bg-white border-none outline-none focus-within:shadow-small'>
        <IoMdSearch fontSize={21} className='ml-1'/>
        <input 
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        onFocus={() => navigate('/search')}
        className='p-2  w-full bg-white outlin-none' />
      </div>
      <div className='flex gap-3'>
        <Link to='#' className='hidden md:block'>
          <img alt='user' className='w-14 h-12 rounded-lg' />
        </Link>
        <Link to='create-pin' className='bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center'>
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
