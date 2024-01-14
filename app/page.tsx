'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import play from './audio'
import Piano from './Piano'
import PianoStrings from './PianoStrings'

export default function Home() {

  useEffect(
    () => {
      navigator.mediaDevices.getUserMedia({ audio: true });
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-5/6 bg-gray-100 rounded-lg shadow-sm flex flex-col items-center min-w-44">
        <div className="flex flex-col items-start mb-4 mt-8 w-5/6">
          <input type='text' placeholder='title' className="duration-200 px-2 
            py-1 my-4 text-xl bg-transparent hover:bg-gray-300 outline-none rounded-lg"></input>
        </div>
        <div id="controls" className="flex flex-row items-center mb-10">
          <button className="bg-green-500 text-white py-1 px-3 rounded-lg font-bold"
            onClick={() => {
            }}>Play</button>
        </div>
        <div id="sources" className="flex flex-col w-5/6 m-auto mb-12">
          <div className="source">_</div>
        </div>
      </div>

      <Piano />

      <PianoStrings />



      <div>
        <Image src="/guitar_piano.png" alt="guitar-piano-comparison" height='500' width='700'></Image>


      </div>
    </main>
  )
}
