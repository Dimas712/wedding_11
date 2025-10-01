import { useState } from "react";
import Countdown from "../components/Countdown";
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

  if (!open) {
    return <Opening setOpen={() => setOpen(true)} />;
  }

  return (
    <div className="font-sans text-gray-800 bg-[url('/baground.jpg')] bg-cover bg-center bg-fixed">
      <Navbar />
      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Undangan Pernikahan</h2>
        <Link>
            <img src="Logo.png" alt="Logo" className="w-32 sm:w-64 md:w-32 lg:w-32 max-w-full h-auto mx-auto"/>
        </Link>
        <h2 className="font-semibold text-3xl mb-6">Dimas & Amel</h2>
        <a
          href="https://calendar.google.com"
          target="_blank"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          Save the Date
        </a>
      </section>

      <section id="mempelai" className="py-16">
        <Mempelai/>
      </section>

      {/* Section Detail Acara */}
      <section id="tanggal" className="py-16">
        <Detailacara />
      </section>

      {/* Section Doa */}
      <section id="" className="py-16">
        <Doa />
      </section>

      {/* Section RSVP */}
      <section id="" className="py-16">
        <RSVP />
      </section>

      <section id="galeri" className="py-16">
        <Galeri/>
      </section>

      {/* Footer */}
      <section className="py-16">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
