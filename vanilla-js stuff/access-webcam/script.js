console.log("Script");
const video = document.getElementById("webcam-video");
const capture = document.getElementById("capture");
const picturesWrapper = document.getElementsByClassName("pictures")[0];
let pics = 0;

async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 640,
        height: 480,
      },
    });
    handleSuccess(stream);
  } catch (e) {
    console.log(navigator.getUserMedia.error);
    console.log(e);
  }
}

const handleSuccess = (stream) => {
  window.stream = stream;
  video.srcObject = stream;
};

init();

capture.addEventListener("click", () => {
  if (pics > 4) return;
  const canvas = document.createElement("canvas");
  canvas.width = 240;
  canvas.height = 180;
  picturesWrapper.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, 240, 180);
  pics++;
});
