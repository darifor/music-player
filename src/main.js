import '../sass/style.scss'

const songs = [
  {
      title: "Flying Free",
      author: "John Doe",
      src: "./audio/song1.mp3",
      img: "./img/cover1.png",
  },
  {
      title: "Down Under",
      author: "Alex Smith",
      src: "./audio/song2.mp3",
      img: "./img/cover2.png",
  },
  {
      title: "That's All",
      author: "Lucy Pevensie",
      src: "./audio/song3.mp3",
      img: "./img/cover3.png",
  },
  {
      title: "Telephone Line",
      author: "Alicia Keys",
      src: "./audio/song4.mp3",
      img: "./img/cover4.png",
  },
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].src);
document.getElementById("prevButton").addEventListener("click", prevSong);
document.getElementById("playButton").addEventListener("click", playPause);
document.getElementById("nextButton").addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgressBar);

// Escuchar el evento 'loadedmetadata' para inicializar valores
audio.addEventListener("loadedmetadata", function () {
    // Inicializar la barra de progreso al principio
    document.getElementById("progressBar").value = 0;
    // Inicializar tiempo inicial y duración del audio
    document.getElementById("currentTime").textContent = formatTime(0);
    document.getElementById("duration").textContent = formatTime(audio.duration || 0);
})

function playPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById("playButton").innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        document.getElementById("playButton").innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function loadSong(index) {
    audio.src = songs[index].src;
    document.getElementById("title").textContent = songs[index].title;
    document.getElementById("author").textContent = songs[index].author;
    document.getElementById("cover").src = songs[index].img;
    document.getElementById("cover").alt = songs[index].author;
    document.getElementById("playButton").innerHTML = '<i class="fa-solid fa-pause"></i>';
    audio.play();
}

function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    document.getElementById("currentTime").textContent = formatTime(audio.currentTime);
    document.getElementById("duration").textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

document.getElementById("progressBar").addEventListener("input", function () {
    audio.currentTime = (this.value / 100) * audio.duration;
});


// Carga inicial
loadSong(currentSongIndex);
document.getElementById("playButton").innerHTML = '<i class="fa-solid fa-play"></i>';
audio.addEventListener("ended", nextSong);