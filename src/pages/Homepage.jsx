import { useState, useRef } from "react";
import Detailacara from "./Detailacara";
import Doa from "./Doa";
import RSVP from "./RSVP";
import Opening from "./Opening";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Mempelai from "./Mempelai";
import Galeri from "./Galeri";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Saat klik "Buka Undangan"
  const handleOpen = () => {
    setOpen(true);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay diblokir:", err));
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!open) {
    // kirim handleOpen ke Opening
    return <Opening setOpen={handleOpen} />;
  }

  return (
    <div className="font-sans text-gray-800 bg-[url('/baground.jpg')] bg-cover bg-center bg-fixed">
      <Navbar />

      {/* Musik */}
      <audio ref={audioRef} loop>
        <source src="/sound.mp3" type="audio/mpeg" />
      </audio>

      {/* Tombol kontrol musik */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Undangan Pernikahan</h2>
        <Link>
          <img
            src="Logo.png"
            alt="Logo"
            className="w-32 sm:w-64 md:w-32 lg:w-32 max-w-full h-auto mx-auto"
          />
        </Link>
        <h2 className="font-semibold text-3xl mb-6">Dimas ❤️ Amel</h2>
        <a
          href="https://calendar.google.com"
          target="_blank"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          Save the Date
        </a>
      </section>

      <section id="mempelai" className="py-16">
        <Mempelai />
      </section>

      <section id="tanggal" className="py-16">
        <Detailacara />
      </section>

      <section className="py-16">
        <Doa />
      </section>

      <section className="py-16">
        <RSVP />
      </section>

      <section id="galeri" className="py-16">
        <Galeri />
      </section>

      <section className="py-16">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
