import { useEffect, useState } from 'react'

export default function PianoStrings() {

  useEffect(() => {
    document.getElementById("show-guitar-strings")?.addEventListener('change', (e) => {
      let strings = document.getElementById("strings");
      if (!strings) return;
      if ((e.target as HTMLInputElement).checked) {
        strings.style.display = "flex";

      }
      else {
        strings.style.display = "none";
      }
    })
  }, [])

  return (
    <>
      <div className="flex flex-col items-center relative w-5/6 h-48">
        <div className="absolute left-0 flex flex-row items-center">
          <input type="checkbox" id="show-guitar-strings" value="show-strings" className="mx-3 w-6 h-6"></input>
          <label>Show Guitar Notes</label>
        </div>
        <div id="strings" className="hidden">
          <div className="left-16/35 bg-orange-400 string">
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
            <div className="string-box">E</div>
          </div>
          <div className="top-8 left-13/35 bg-yellow-300 string">
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div>
          </div>
          <div className="top-16 left-11/35 bg-pink-400 string">
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div>
          </div>
          <div className="top-24 left-8/35 bg-green-400 string">
            <div className="string-box">D</div>
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
          </div>
          <div className="top-30 left-5/35 bg-blue-400 string">
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div>
          </div>
          <div className="top-38 left-2/35 bg-orange-400 string">
            <div className="string-box">E</div><div className="string-box">F</div>
            <div className="string-box">G</div><div className="string-box">A</div>
            <div className="string-box">B</div><div className="string-box">C</div>
            <div className="string-box">D</div><div className="string-box">E</div>
            <div className="string-box">F</div><div className="string-box">G</div>
            <div className="string-box">A</div><div className="string-box">B</div>
            <div className="string-box">C</div><div className="string-box">D</div>
            <div className="string-box">E</div>
          </div>
        </div>
      </div>
    </>
  )
}
