import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-600 flex flex-col2 justify-center border-t border-gray-300">
      <div className="mb-2 flex flex-col items-center">
        <img
        src="/Logo.png"
        alt="Logo"
        className="w-32 h-32 mb-2 md:w-32 md:h-32 mx-auto rounded-full object-cover border border-gray-300"
        />
        <h2 className="text-xl font-semibold">
          Dimas <span className="text-red-500">❤️</span> Amel
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
