import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  return (
    <div>
      <div className="bg-pink-200 shadow-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center mr-5">
            <img
              src="https://img.freepik.com/premium-vector/letter-c-butterfly-pink-logo_715895-518.jpg"
              alt=""
              className="h-16 md:mr-2"
            />
            <span className="text-pink-700 text-2xl font-serif font-bold">CREATIVA</span>
          </Link>

          <div className="flex items-center space-x-4 w-[200px]">
            <Link to="/" className="text-pink-700 hover:text-pink-800 text-xl font-semibold">
              Home
            </Link>
            <Link to="/create" className="text-pink-700 hover:text-pink-800 text-xl font-semibold">
              Create
            </Link>
            <Link
              to="/account"
              className="w-12 h-12 rounded-full bg-pink-700 flex items-center justify-center font-semibold text-2xl text-white"
            >
              {user.name.slice(0, 1)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar