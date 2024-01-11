'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import play from './audio'

export default function Home() {

  var comp = [
    [261, 200],
    [294, 200],
    [330, 200],
    [349, 200],
    [392, 200],
    [440, 200],
    [494, 200],
    [523, 400], // C5
  ]

  useEffect(
    () => {
      navigator.mediaDevices.getUserMedia({ audio: true });
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-2/3 sm:w-5/6 bg-gray-100 rounded-lg shadow-sm">
        <h1 className="p-12 text-lg">Workspace Title</h1>
        <button onClick={() => {
          play(comp.reverse());
        }}>Play</button>
        <div id="sources" className="flex flex-col w-5/6 m-auto mb-12">
          <div className="source">e</div>
          <div className="source">B</div>
          <div className="source">G</div>
          <div className="source">D</div>
          <div className="source">A</div>
          <div className="source">E</div>
        </div>
      </div>
    </main>
  )
}
