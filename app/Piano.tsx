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

export default function Piano() {

  return (
    <div id='board' className="w-11/12 xl:w-5/6 h-32 xl:h-40 bg-gray-100 my-12 sm:flex flex-row relative hidden">

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
      <div id='e3' className="key"></div>
      <div id='f3' className="key">
        <div id='f3#' className="sharp-key"></div>
      </div>
      <div id='g3' className="key">
        <div id='g3#' className="sharp-key"></div>
      </div>
      <div id='a3' className="key">
        <div id='a3#' className="sharp-key"></div>
      </div>
      <div id='b3' className="key"></div>

      {/* Octave 4 */}
      <div id='c4' className="key">
        <div id='c4#' className="sharp-key"></div>
      </div>
      <div id='d4' className="key">
        <div id='d4#' className="sharp-key"></div>
      </div>
      <div id='e4' className="key"></div>
      <div id='f4' className="key">
        <div id='f4#' className="sharp-key"></div>
      </div>
      <div id='g4' className="key">
        <div id='g4#' className="sharp-key"></div>
      </div>
      <div id='a4' className="key">
        <div id='a4#' className="sharp-key"></div>
      </div>
      <div id='b4' className="key"></div>

      {/* Octave 5 */}
      <div id='c5' className="key">
        <div id='c5#' className="sharp-key"></div>
      </div>
      <div id='d5' className="key">
        <div id='d5#' className="sharp-key"></div>
      </div>
      <div id='e5' className="key"></div>
      <div id='f5' className="key">
        <div id='f5#' className="sharp-key"></div>
      </div>
      <div id='g5' className="key">
        <div id='g5#' className="sharp-key"></div>
      </div>
      <div id='a5' className="key">
        <div id='a5#' className="sharp-key"></div>
      </div>
      <div id='b5' className="key"></div>

      {/* Octave 6 */}
      <div id='c6' className="key">
        <div id='c6#' className="sharp-key"></div>
      </div>
      <div id='d6' className="key">
        <div id='d6#' className="sharp-key"></div>
      </div>
      <div id='e6' className="key"></div>
      <div id='f6' className="key">
        <div id='f6#' className="sharp-key"></div>
      </div>
      <div id='g6' className="key">
        <div id='g6#' className="sharp-key"></div>
      </div>
      <div id='a6' className="key">
        <div id='a6#' className="sharp-key"></div>
      </div>
      <div id='b6' className="key border-r-2"></div>

    </div>
  )
}
