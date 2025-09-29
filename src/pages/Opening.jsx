import React from 'react'
import { Link } from 'react-router-dom'

const Opening = ({ setOpen }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-white text-center px-4 bg-[url('/opening.jpg')] bg-cover bg-center sm:bg-top bg-no-repeat">
      <h1 className="text-3xl font-bold mb-4">Undangan Pernikahan</h1>

      <Link to="/" className="block w-full">
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-40 sm:w-64 md:w-32 lg:w-64 max-w-full h-auto mx-auto"
        />
      </Link>

      <p className="text-3xl font-semibold mb-6">Dimas & Amel</p>

      <button
        onClick={setOpen}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
      >
        Buka Undangan
      </button>
    </div>
  )
}

export default Opening
