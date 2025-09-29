import React, {useEffect, useState} from 'react'

const Countdown = ({date}) => {
const [timeLeft, setTimeLeft] = useState({})

useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = date - now;

        if (distance > 0) {
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        } else {
            setTimeLeft({})
        }
    }, 1000);
        return () => clearInterval(interval)
}, [date])

  return (
 <div className="flex space-x-4 text-2xl font-bold mb-6">
    <div className="flex flex-col items-center px-4 py-2 border border-white rounded-lg">
      <span>{timeLeft.days || 0}</span>
      <span className="text-sm font-normal">Hari</span>
    </div>
    <div className="flex flex-col items-center px-4 py-2 border border-white rounded-lg">
      <span>{timeLeft.hours || 0}</span>
      <span className="text-sm font-normal">Jam</span>
    </div>
    <div className="flex flex-col items-center px-4 py-2 border border-white rounded-lg">
      <span>{timeLeft.minutes || 0}</span>
      <span className="text-sm font-normal">Menit</span>
    </div>
    <div className="flex flex-col items-center px-4 py-2 border border-white rounded-lg">
      <span>{timeLeft.seconds || 0}</span>
      <span className="text-sm font-normal">Detik</span>
    </div>
  </div>
  )
}

export default Countdown