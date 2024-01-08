export default function playNote(frequency : number, duration : number) {
  // TODO: move scopes of these variables, since this is just pulled from stackoverflow
  var audioCtx = new(window.AudioContext)();
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    }, duration);
}
