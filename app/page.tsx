'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import play from './audio'

export default function Home() {

  //var comp = [
  //  [261, 200],
  //  [294, 200],
  //  [330, 200],
  //  [349, 200],
  //  [392, 200],
  //  [440, 200],
  //  [494, 200],
  //  [523, 400], // C5
  //]

  var middle = {
    C: 261,
    D: 294,
    E: 330,
    F: 349,
    G: 392,
    A: 440,
    B: 494
  }

  let beat = 300

  var ohSus = [
    [middle.C, beat],
    [middle.D, beat],
    [middle.E, beat],
    [middle.G, beat],
    [middle.G, beat],
    [middle.A, beat],
    [middle.G, beat],
    [middle.E, beat],
    [middle.C, beat],
    [middle.D, beat],
    // newline
    [middle.E, beat],
    [middle.E, beat],
    [middle.D, beat],
    [middle.C, beat],
    [middle.D, beat * 2],
    [middle.C, beat],
    [middle.D, beat],
    [middle.E, beat],
    [middle.G, beat],
    [middle.G, beat],
    [middle.A, beat],
    //newline
    [middle.G, beat],
    [middle.E, beat],
    [middle.C, beat],
    [middle.D, beat],
    [middle.E, beat],
    [middle.E, beat],
    [middle.D, beat],
    [middle.D, beat],
    [middle.C, beat * 2],

  ]

  useEffect(
    () => {
      navigator.mediaDevices.getUserMedia({ audio: true });
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-2/3 sm:w-5/6 bg-gray-100 rounded-lg shadow-sm flex flex-col items-center">
        <div className="flex flex-col items-start mb-4 mt-8 w-5/6">
          <input type='text' placeholder='title' className="duration-200 px-2 
            py-1 my-4 text-xl bg-transparent hover:bg-gray-300 outline-none rounded-lg"></input>
        </div>
        <div id="controls" className="flex flex-row items-center mb-10">
          <button className="bg-green-500 text-white py-1 px-3 rounded-lg font-bold"
            onClick={() => {
              play(ohSus);
            }}>Play</button>
        </div>
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
