const container = document.querySelector(".container"),
    backSong = container.querySelector(".backSong"),
    playBtn = container.querySelector(".play-btn"),
    nextSong = container.querySelector(".nextSong"),
    songName = container.querySelector(".song-name"),
    singerName = container.querySelector(".singer-name"),
    songImg = container.querySelector(".songImg"),
    songRange = container.querySelector(".songRange"),
    currentMin = container.querySelector(".currentMin"),
    duration = container.querySelector(".duration"),
    volumeMusic = container.querySelector(".volumeMusic");


let index = 0;

// ------- Create Audio Object here -------
let music = new Audio('songs/Khulke jeene ka.mp3');
music.volume = 1;
// ------ All songs here -----
let songs = [
    { song: 'songs/Khulke jeene ka.mp3', Photo: 'img/Khulke Jeene.jpg', title: 'Khulke jeene ka', SingerName: 'A R Rahman,Arijit Singh...' },
    { song: 'songs/Kesariya.mp3', Photo: 'img/Kesariya.jpg', title: 'Kesariya', SingerName: 'Amitabh Bhattacharya,Arijit Singh...' },
    { song: 'songs/Ek Zindagi.mp3', Photo: 'img/Ek Zindagi.jpg', title: 'Ek Zindagi', SingerName: 'Taniskaa Sanghvi,Sachin-Jigar' },
    { song: 'songs/Love You Zindagi.mp3', Photo: 'img/Love You Zindagi.jpg', title: 'Love You Zindagi', SingerName: 'Amit Trivedi & Jasleen Royal' },
    { song: 'songs/Manike Mage Hithe.mp3', Photo: 'img/Manike.jpg', title: 'Manike(Thank God)', SingerName: 'Yohani' },
    { song: 'songs/Jaane Kyun.mp3', Photo: 'img/Jaane Kyun.jpg', title: 'Jaane Kyun', SingerName: 'Vishal Dadlani' },
];


// ----- playSong -----
function playSong() {
    if (music.paused) {
        playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
        music.play();
    } else {
        playBtn.classList.replace("bx-pause-circle", "bx-play-circle");
        music.pause();
    }
}

// ----- update song ---
function updateSong(index) {
    music.src = songs[index].song;
    music.currentTime = 0;
    music.play();
    playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
    songName.textContent = songs[index].title;
    singerName.textContent = songs[index].SingerName;
    songImg.src = songs[index].Photo;
}


// ----- play nextSong ----
function playNextSong() {
    if (index === 5) {
        index = 0;
    } else {
        index += 1;
    }
    updateSong(index);
}


// ----- playBackSong ------

function playBackSong() {
    if (index === 0) {
        index = 5;
    } else {
        index -= 1;
    }
    updateSong(index);
}

// --- Time update Event ---
music.addEventListener("timeupdate", () => {
    songRange.style.width = music.currentTime / music.duration * 100 + "%";

    let min = Math.floor(music.currentTime / 60);
    let sec = Math.floor(music.currentTime % 60);
    if (sec < 10)
        sec = `0${sec}`;
    currentMin.textContent = `${min}:${sec}`;

    let durationMint;
    let durationSec; 

    music.addEventListener("loadeddata", () => {
        durationMint  = Math.floor(music.duration / 60);
        durationSec = Math.round(music.duration % 60);
        if (durationSec < 10)
            durationSec = `0${durationSec}`;
        duration.textContent = `0${durationMint}:${durationSec}`;

    });
});


// ---- change ----
volumeMusic.addEventListener("change",()=>{
   music.volume = volumeMusic.value/100;
})

// ----- Click Events -----
backSong.addEventListener("click", playBackSong)
playBtn.addEventListener("click", playSong);
nextSong.addEventListener("click", playNextSong);






