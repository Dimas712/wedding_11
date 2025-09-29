import React from "react";

const RSVP = () => {
  return (
    <section className="py-16 text-center px-6">
      <form className="max-w-md mx-auto space-y-4 border border-white rounded-lg p-6 bg-white backdrop-blur text-black">
        <h3 className="text-2xl font-bold mb-6 text-black">RSVP</h3>
        <input
          type="text"
          placeholder="Nama Anda"
          className="w-full p-3 border border-white rounded-lg bg-transparent text-black placeholder-black border-black"
        />
        <select className="w-full p-3 border border-black rounded-lg bg-transparent text-black">
          <option className="text-black">Konfirmasi Kehadiran</option>
          <option className="text-black">Hadir</option>
          <option className="text-black">Tidak Hadir</option>
        </select>
        <button
          type="submit"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Kirim
        </button>
      </form>
    </section>
  );
};

export default RSVP;
