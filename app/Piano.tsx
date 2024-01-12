function pure(e: any) {
  console.log('pure');
  e.stopPropagation();
}

function sharp(e: any) {
  console.log('sharp');
  e.stopPropagation();
}

export default function Piano() {
  return (
    <div id='board' className="w-11/12 xl:w-5/6 h-32 xl:h-40 bg-gray-100 my-12 sm:flex flex-row relative hidden">

      {/* Octave 2 */}
      <div id='c2' onClick={pure} className="key border-l-2">
        <div id='c2#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='d2' className="key">
        <div id='d2#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='e2' className="key"></div>
      <div id='f2' className="key">
        <div id='f2#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='g2' className="key">
        <div id='g2#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='a2' className="key">
        <div id='a2#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='b2' className="key"></div>

      {/* Octave 3 */}
      <div id='c3' onClick={pure} className="key">
        <div id='c3#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='d3' className="key">
        <div id='d3#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='e3' className="key"></div>
      <div id='f3' className="key">
        <div id='f3#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='g3' className="key">
        <div id='g3#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='a3' className="key">
        <div id='a3#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='b3' className="key"></div>

      {/* Octave 4 */}
      <div id='c4' onClick={pure} className="key">
        <div id='c4#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='d4' className="key">
        <div id='d4#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='e4' className="key"></div>
      <div id='f4' className="key">
        <div id='f4#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='g4' className="key">
        <div id='g4#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='a4' className="key">
        <div id='a4#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='b4' className="key"></div>

      {/* Octave 5 */}
      <div id='c5' onClick={pure} className="key">
        <div id='c5#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='d5' className="key">
        <div id='d5#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='e5' className="key"></div>
      <div id='f5' className="key">
        <div id='f5#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='g5' className="key">
        <div id='g5#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='a5' className="key">
        <div id='a5#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='b5' className="key"></div>

      {/* Octave 6 */}
      <div id='c6' onClick={pure} className="key">
        <div id='c6#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='d6' className="key">
        <div id='d6#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='e6' className="key"></div>
      <div id='f6' className="key">
        <div id='f6#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='g6' className="key">
        <div id='g6#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='a6' className="key">
        <div id='a6#' onClick={sharp} className="sharp-key"></div>
      </div>
      <div id='b6' className="key border-r-2"></div>

    </div>
  )
}
