const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

const handleInput = () => {
  videoInput.click();
};
const acceptInputHandler = (obj) => {
  const selectedVideo = obj.target.files[0];

  // Src -> base64

  const link = URL.createObjectURL(selectedVideo);
  const video = document.createElement("video");
  video.src = link;
  video.controls = "true";
  video.setAttribute("class", "video");
  videoPlayer.appendChild(video);
};

const speedUpHandler = () => {
  console.log("Yaha Spped bhado");
  const videoElement = document.querySelector("video");

  if (videoElement == null) {
    return;
  }
  const increaseSpeed = videoElement.playbackRate + 0.5;
  videoElement.playbackRate = increaseSpeed;
};

const speedDownHandler = () => {
  console.log("Yaha Spped kam karo");
  const videoElement = document.querySelector("video");

  if (videoElement == null) {
    return;
  }

  const decreaseSpeed = videoElement.playbackRate - 0.5;
  videoElement.playbackRate = decreaseSpeed;
};

const volumeUpHandler = () => {
  console.log("Increase Volume here");
  const videoElement = document.querySelector("video");
  if (videoElement == null) {
    return;
  }

  if (videoElement.volume >= 0.99) {
    return;
  }

  videoElement.volume = videoElement.volume + 0.1;
  console.log("increased volume by: ", videoElement.volume);
};

const volumeDownHandler = () => {
  console.log("IDecrease Volume here");
  const videoElement = document.querySelector("video");
  if (videoElement == null) {
    return;
  }

  if (videoElement.volume <= 0.1) {
    videoElement.volume = 0;
    return;
  }

  videoElement.volume = videoElement.volume - 0.1;
  console.log("decreased volume by: ", videoElement.volume);
};
videoBtn.addEventListener("click", handleInput);
// When file is selected:
videoInput.addEventListener("change", acceptInputHandler);
// increase speed:
speedUp.addEventListener("click", speedUpHandler);
// decrease speed:
speedDown.addEventListener("click", speedDownHandler);
// volume increase:
volumeUp.addEventListener("click", volumeUpHandler);
// volume decreaese:
volumeDown.addEventListener("click", volumeDownHandler);
