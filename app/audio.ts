var composition: number[][];
var itr = 0;

export default function play(comp: number[][]) {
  composition = comp;
  itr = 0;
  let firstNote = composition[itr++];
  if (firstNote) playNote(firstNote[0], firstNote[1])
}

export function playNote(frequency: number, duration: number) {
  // TODO: move scopes of these variables, since this is just pulled from stackoverflow
  console.log("now");
  var audioCtx = new (window.AudioContext)();
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();


  setTimeout(
    function() {
      oscillator.stop();
      if (itr < composition.length + 1) {
        let note = composition[itr];
        console.log(itr);
        itr++;
        if (note) playNote(note[0], note[1]);
      }

    }, duration);
}
