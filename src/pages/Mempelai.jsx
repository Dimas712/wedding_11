import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Mempelai = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
      {/* Dekorasi bunga kiri */}
        <img
        src="/left.svg"
        alt="Flower Left"
        className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-56 z-10"
        />

        {/* Dekorasi bunga kanan */}
        <img
        src="/right.svg"
        alt="Flower Right"
        className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-56 z-10"
        />

      {/* Opening text */}
      <h2 className="text-2xl md:text-3xl font-semibold font-serif text-blue-900 mb-4 z-50">
        Assalamu’alaikum Wr. Wb.
      </h2>
      <p className="text-brown-600 max-w-2xl mb-12 z-50">
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
        Kerabat sekalian untuk menghadiri acara pernikahan kami:
      </p>

      {/* Mempelai */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        {/* Pengantin wanita */}
        <div className="text-center">
          <h3 className="text-2xl font-dancing text-blue-900 mb-4">
            Nanda Amelia
          </h3>
          <img
            src="/bride.jpg"
            alt="Bride"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg mx-auto mb-4"
          />
          <p className="text-brown-500 italic mb-1">Putri Pertama dari</p>
          <p className="font-semibold">Bapak Mardianto</p>
          <p className="font-semibold mb-3">Ibu Boinem</p>
          {/* Sosmed */}
          <div className="flex justify-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-blue-900 text-xl hover:text-pink-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-blue-900 text-xl hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Icon heart di tengah */}
        <div className="hidden md:flex items-center">
          <span className="text-3xl text-pink-600">❤</span>
        </div>

        {/* Pengantin pria */}
        <div className="text-center">
          <h3 className="text-2xl font-dancing text-blue-900 mb-4">
            Dimas Alip
          </h3>
          <img
            src="/groom.jpg"
            alt="Groom"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg mx-auto mb-4"
          />
          <p className="text-brown-500 italic mb-1">Putra Pertama dari</p>
          <p className="font-semibold">Bapak Tosan</p>
          <p className="font-semibold mb-3">Ibu Sunariyah</p>
          {/* Sosmed */}
          <div className="flex justify-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-blue-900 text-xl hover:text-pink-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-blue-900 text-xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mempelai;
