var composition: number[][];

export default function play(comp: number[][]) {
  composition = comp;
  let firstNote = composition.pop();
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

  var middle = {
    C: 261,
    D: 294,
    E: 330,
    F: 349,
    G: 392,
    A: 440,
    B: 494
  }

  setTimeout(
    function() {
      oscillator.stop();
      if (composition.length > 0) {
        let note = composition.pop();
        if (note) playNote(note[0], note[1]);
      }

    }, duration);
}
