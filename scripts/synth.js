const hz = {
    'C':  32.703195662574829,
    'C#':  34.647828872109012,
    'D':  36.708095989675945,
    'D#':  38.890872965260113,
    'E':  41.203444614108741,
    'F':  43.653528929125485,
    'F#':  46.249302838954299,
    'G':  48.999429497718661,
    'G#':  51.913087197493142,
    'A':  55.000000000000000,
    'A#':  58.270470189761239,
    'B':  61.735412657015513
};

let activeVoices = {};

class Voice {
    constructor(note) {
        this.frequency = hz[note]* 4;

        console.log('Note:', + note);
        console.log('Frequency:', this.frequency);

        this.note = note;
        this.osicillator = audioCtx.createOscillator();
        this.oscillator.typ = $('#waveType').val();
    }
    start() {
        this.oscillator.frequency.setValueAtTime(this.frequency, 1000);
        this.oscillator.connect(audioCtx.destination);
        this.oscillator.start();
    }

    stop() {
        this.oscillator.stop();
    }
}

(($) =>  {
  // create web audio api context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator; // Declare here in context where all event listeners have access

  // Controls
  $("#playBtn").click(function () {
    // Create oscillator
    oscillator = audioCtx.createOscillator();

    // Connect the oscillator node to the audio context destination which is the output
    oscillator.connect(audioCtx.destination);

    // Set frequency
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);

    // Set wave form type from select - default is Sine
    const waveType = $("#waveType").val();
    oscillator.type = waveType;

    // Start oscillator
    oscillator.start();

    // Show/hide buttons
    $("#playBtn").hide();
    $("#stopBtn").show();
  });

  $("#stopBtn").click(function () {
    // Stop the oscillator
    oscillator.stop();

    // Show/hide buttons
    $("#stopBtn").hide();
    $("#playBtn").show();
  });
})(jQuery);
