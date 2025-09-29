import React from "react";
import { FaHome, FaUserFriends, FaCalendarAlt, FaImages } from "react-icons/fa";

const Navbar = () => {
  const items = [
    { icon: <FaHome className="text-xl mb-1" />, label: "Home", link: "#home" },
    { icon: <FaUserFriends className="text-xl mb-1" />, label: "Mempelai", link: "#mempelai" },
    { icon: <FaCalendarAlt className="text-xl mb-1" />, label: "Tanggal", link: "#tanggal" },
    { icon: <FaImages className="text-xl mb-1" />, label: "Galeri", link: "#galeri" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-500 shadow-md rounded-t-2xl z-50">
      <ul className="flex justify-around items-center text-gray-700 py-3">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center text-sm">
            <a
              href={item.link}
              className="flex flex-col items-center hover:text-white transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
