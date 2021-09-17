const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let analyser = audioCtx.createAnalyser();

const AudioContext  = {

  getAudioContext() {
    return audioCtx;
  },

  getAnalyser() {
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData(audioData) {
    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data heres
    });
  }

}

export default AudioContext;
