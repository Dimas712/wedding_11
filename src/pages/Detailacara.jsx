import React from 'react'
import Countdown from '../components/Countdown'

const Detailacara = () => {
const weddingDate = new Date("2025-12-20T09:00:00").getTime();

  return (
    <section className='py-16 text-center'>
        <h3 className='text-2xl font-bold mb-6'>Waktu Menuju Acara</h3>
        <div className='flex justify-center mb-8'>
            <Countdown date={weddingDate}/>
        </div>
        <div className='mb-6 px-6 py-4 border rounded-lg border-gray-300 shadow-md bg-white bg-opacity-80'>
            <h2 className='font-semibold mb-2 text-lg'>Akad Nikah</h2>
            <p>Sabtu, 20 Oktober 2024</p>
            <p>Masjid Agung Nurul Faizin</p>
        </div>
        <div className='mb-6 px-6 py-4 border rounded-lg border-gray-300 shadow-md bg-white bg-opacity-80'>
            <h2 className='font-semibold mb-2 text-lg'>Resepsi</h2>
            <p>Minggu, 21 Oktober 2024</p>
            <p>Gedung Serbaguna Jasinga</p>
        </div>
    </section>
  )
}

export default Detailacara