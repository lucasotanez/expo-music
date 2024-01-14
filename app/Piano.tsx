import { useEffect, useState } from 'react'
import { binds, notes } from './keybinds'
var audioContext = new (window.AudioContext)();

function note(e: any, freq: number, type: string) {
  e.stopPropagation();
  e.preventDefault();
  if (e.button != 0) return;
  let osc = audioContext.createOscillator();
  osc.type = 'square';
  osc.frequency.value = freq;
  osc.connect(audioContext.destination);
  osc.start();
  e.target.style.backgroundColor = "gray";
  e.target.addEventListener('mouseup', () => {
    osc.stop();
    if (type === 'pure') e.target.style.backgroundColor = "white";
    else if (type === 'sharp') e.target.style.backgroundColor = "black"
  })
  e.target.addEventListener('mouseout', () => {
    osc.stop();
    if (type === 'pure') e.target.style.backgroundColor = "white";
    else if (type === 'sharp') e.target.style.backgroundColor = "black"
  })
}

function keyNote(keycode: string) {
  let mappedNote = binds.get(keycode);
  if (!mappedNote) return;
  let target = document.getElementById(mappedNote);
  if (!target) return;
  let freq = notes.get(mappedNote);
  if (!freq) return;
  let osc = audioContext.createOscillator();
  osc.type = 'square';
  osc.frequency.value = freq;
  osc.connect(audioContext.destination);
  osc.start();
  target.style.backgroundColor = "gray";
  document.addEventListener('keyup', (e: any) => {
    if (keycode != e.code) return;
    osc.stop();
    if (!target) return;
    if (!mappedNote) return;
    if (mappedNote.length === 2) target.style.backgroundColor = "white";
    else target.style.backgroundColor = "black"
  })
}

export default function Piano() {

  var pianoMode: boolean = false;

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (pianoMode) keyNote(e.code)
    })

    document.getElementById("enable-binds")?.addEventListener('change', (e) => {
      if ((e.target as HTMLInputElement).checked) {
        pianoMode = true;
        let sheet = document.getElementById('keymap-sheet');
        if (sheet) sheet.style.display = 'flex';
      } else {
        pianoMode = false;
        let sheet = document.getElementById('keymap-sheet');
        if (sheet) sheet.style.display = 'none';
      }
    })
  }, [])

  return (
    <>
      <div className="hidden md:flex flex-row items-center w-5/6 my-6">
        <input id='enable-binds' type='checkbox' className="w-6 h-6 my-4 mx-3"></input><label>Enable Keybinds</label>
      </div>
      <div id="keymap-sheet" className="flex-col w-full md:w-1/2 bg-gray-100 p-4 rounded-lg mb-4 hidden">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center text-xs font-bold mr-2">
            <div>Note:</div>
            <div>Key:</div>
          </div>
          <div className="flex flex-row w-full justify-evenly text-xs">
            <div className="flex flex-col items-center">
              <div>C4</div>
              <div>A</div>
            </div>
            <div className="flex flex-col items-center">
              <div>C4#</div>
              <div>S</div>
            </div>
            <div className="flex flex-col items-center">
              <div>D4</div>
              <div>D</div>
            </div>
            <div className="flex flex-col items-center">
              <div>D4#</div>
              <div>F</div>
            </div>
            <div className="flex flex-col items-center">
              <div>E4</div>
              <div>G</div>
            </div>
            <div className="flex flex-col items-center">
              <div>F4</div>
              <div>H</div>
            </div>
            <div className="flex flex-col items-center">
              <div>F4#</div>
              <div>J</div>
            </div>
            <div className="flex flex-col items-center">
              <div>G4</div>
              <div>K</div>
            </div>
            <div className="flex flex-col items-center">
              <div>G4#</div>
              <div>L</div>
            </div>
            <div className="flex flex-col items-center">
              <div>A4</div>
              <div>;</div>
            </div>
            <div className="flex flex-col items-center">
              <div>A4#</div>
              <div>'</div>
            </div>
            <div className="flex flex-col items-center">
              <div>B4</div>
              <div>&rarr;</div>
            </div>
          </div>
        </div>
      </div>

      <div id='board' className="w-11/12 xl:w-5/6 h-32 xl:h-40 bg-gray-100 mb-12 sm:flex flex-row relative hidden">

        {/* Octave 2 */}
        <div id='c2' onMouseDown={(e) => note(e, 65.4, 'pure')} className="key border-l-2">
          <div id='c2#' onMouseDown={(e) => note(e, 69.3, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='d2' onMouseDown={(e) => note(e, 73.4, 'pure')} className="key">
          <div id='d2#' onMouseDown={(e) => note(e, 77.8, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='e2' onMouseDown={(e) => note(e, 82.4, 'pure')} className="key"></div>
        <div id='f2' onMouseDown={(e) => note(e, 87.3, 'pure')} className="key">
          <div id='f2#' onMouseDown={(e) => note(e, 92.5, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='g2' onMouseDown={(e) => note(e, 98, 'pure')} className="key">
          <div id='g2#' onMouseDown={(e) => note(e, 103.8, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='a2' onMouseDown={(e) => note(e, 110, 'pure')} className="key">
          <div id='a2#' onMouseDown={(e) => note(e, 116.5, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='b2' onMouseDown={(e) => note(e, 123.5, 'pure')} className="key"></div>

        {/* Octave 3 */}
        <div id='c3' onMouseDown={(e) => note(e, 130.8, 'pure')} className="key">
          <div id='c3#' onMouseDown={(e) => note(e, 138.6, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='d3' onMouseDown={(e) => note(e, 146.8, 'pure')} className="key">
          <div id='d3#' onMouseDown={(e) => note(e, 155.6, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='e3' onMouseDown={(e) => note(e, 164.8, 'pure')} className="key"></div>
        <div id='f3' onMouseDown={(e) => note(e, 174.6, 'pure')} className="key">
          <div id='f3#' onMouseDown={(e) => note(e, 185, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='g3' onMouseDown={(e) => note(e, 196, 'pure')} className="key">
          <div id='g3#' onMouseDown={(e) => note(e, 207.7, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='a3' onMouseDown={(e) => note(e, 220, 'pure')} className="key">
          <div id='a3#' onMouseDown={(e) => note(e, 233, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='b3' onMouseDown={(e) => note(e, 246.9, 'pure')} className="key"></div>

        {/* Octave 4 */}
        <div id='c4' onMouseDown={(e) => note(e, 261.6, 'pure')} className="key">
          <div id='c4#' onMouseDown={(e) => note(e, 277.1, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='d4' onMouseDown={(e) => note(e, 293.7, 'pure')} className="key">
          <div id='d4#' onMouseDown={(e) => note(e, 311.1, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='e4' onMouseDown={(e) => note(e, 329.6, 'pure')} className="key"></div>
        <div id='f4' onMouseDown={(e) => note(e, 349.2, 'pure')} className="key">
          <div id='f4#' onMouseDown={(e) => note(e, 369.99, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='g4' onMouseDown={(e) => note(e, 392, 'pure')} className="key">
          <div id='g4#' onMouseDown={(e) => note(e, 415.3, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='a4' onMouseDown={(e) => note(e, 440, 'pure')} className="key">
          <div id='a4#' onMouseDown={(e) => note(e, 466.16, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='b4' onMouseDown={(e) => note(e, 493.88, 'pure')} className="key"></div>

        {/* Octave 5 */}
        <div id='c5' onMouseDown={(e) => note(e, 523.25, 'pure')} className="key">
          <div id='c5#' onMouseDown={(e) => note(e, 554.37, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='d5' onMouseDown={(e) => note(e, 587.33, 'pure')} className="key">
          <div id='d5#' onMouseDown={(e) => note(e, 622.25, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='e5' onMouseDown={(e) => note(e, 659.26, 'pure')} className="key"></div>
        <div id='f5' onMouseDown={(e) => note(e, 698.46, 'pure')} className="key">
          <div id='f5#' onMouseDown={(e) => note(e, 739.99, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='g5' onMouseDown={(e) => note(e, 783.99, 'pure')} className="key">
          <div id='g5#' onMouseDown={(e) => note(e, 830.61, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='a5' onMouseDown={(e) => note(e, 880, 'pure')} className="key">
          <div id='a5#' onMouseDown={(e) => note(e, 932.33, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='b5' onMouseDown={(e) => note(e, 987.77, 'pure')} className="key"></div>

        {/* Octave 6 */}
        <div id='c6' onMouseDown={(e) => note(e, 1046.5, 'pure')} className="key">
          <div id='c6#' onMouseDown={(e) => note(e, 1108.7, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='d6' onMouseDown={(e) => note(e, 1174.7, 'pure')} className="key">
          <div id='d6#' onMouseDown={(e) => note(e, 1244.5, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='e6' onMouseDown={(e) => note(e, 1318.5, 'pure')} className="key"></div>
        <div id='f6' onMouseDown={(e) => note(e, 1396.9, 'pure')} className="key">
          <div id='f6#' onMouseDown={(e) => note(e, 1480, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='g6' onMouseDown={(e) => note(e, 1568, 'pure')} className="key">
          <div id='g6#' onMouseDown={(e) => note(e, 1661.2, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='a6' onMouseDown={(e) => note(e, 1760, 'pure')} className="key">
          <div id='a6#' onMouseDown={(e) => note(e, 1864.7, 'sharp')} className="sharp-key"></div>
        </div>
        <div id='b6' onMouseDown={(e) => note(e, 1975.5, 'pure')} className="key border-r-2"></div>

      </div>
    </>
  )
}
