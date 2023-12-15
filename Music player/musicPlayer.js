//declaring variables
const playlistName = document.getElementById('playlist-title');
const cover = document.getElementById('cover');
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const like = document.getElementById('like');
const song = document.getElementById('audio');
const previous = document.getElementById('previous');
const playPause = document.getElementById('play');
const next = document.getElementById('next');

//Creating a dictionary to each music
const speakToMe = {
    songName : 'Speak to me',
    artist : 'Pink Floyd',
    file : '01 Speak To Me',
    isLiked : false 
};
const Breathe = {
    songName : 'Breathe',
    artist : 'Pink Floyd',
    file: '02 Breathe',
    isLiked : false
};
const onTheRun = {
    songName : 'On The Run',
    artist : 'Pink Floyd',
    file: '03 On The Run',
    isLiked : false
};
const time = {
    songName : 'Time',
    artist : 'Pink Floyd',
    file: '04 Time',
    isLiked : false
};
const theGreatGigInTheSky = {
    songName : 'The Great Gig In TheSky',
    artist : 'Pink Floyd',
    file: '05 The Great Gig In The Sky',
    isLiked : false
};
const money = {
    songName : 'Money',
    artist : 'Pink Floyd',
    file: '06 Money',
    isLiked : false
};
const usAndThem = {
    songName : 'Us and Them',
    artist : 'Pink Floyd',
    file: '07 Us And Them',
    isLiked : false
};
const anyColourYouLike = {
    songName : 'Any Colour You Like',
    artist : 'Pink Floyd',
    file: '08 Any Colour You Like',
    isLiked : false
};
const brainDamage = {
    songName : 'Brain Damage',
    artist : 'Pink Floyd',
    file: '09 Brain Damage',
    isLiked : false
};
const eclipse = {
    songName : 'Eclipse',
    artist : 'Pink Floyd',
    file: '10 Eclipse',
    isLiked : false
};

//Playlist of songs
const playlist = [
    speakToMe, Breathe, onTheRun, time, theGreatGigInTheSky, 
    money, usAndThem, anyColourYouLike, brainDamage, eclipse
];

let index = 0;
let isPlaying = false;

function inicializeSong(){
    cover.src = 'images/Dark_side_of_the_moon.png';
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
    updateLikeStatus();
}

//functions of buttons
function playPauseDecider(){

    if(isPlaying === false){
        playSong();
    }
    else{
        pauseSong();
    }
}

function playSong(){
    playPause.querySelector('.bi').classList.remove('bi-play-circle-fill');
    playPause.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    playPause.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    playPause.querySelector('.bi').classList.add('bi-play-circle-fill');
    song.pause();
    isPlaying = false;
}

function previousMusic(){
    if(index === 0){
        index = playlist.length-1;
    }
    else{
        index -=1;       
    }
    inicializeSong();
    playSong();
}

function nextMusic(){
    if(index === playlist.length-1){
        index = 0;
    }
    else{       
        index +=1;
    }
    inicializeSong();
    playSong();
}

function toLike(){
    playlist[index].isLiked = true;
    updateLikeStatus();
}
function unlike(){
    playlist[index].isLiked = false;
    updateLikeStatus();
} 

function likeDecider(){
    if(playlist[index].isLiked === false){
        toLike();
    }
    else{
        unlike();
    }
}

function updateLikeStatus(){
    if(playlist[index].isLiked === false){
        like.querySelector('.bi').classList.remove('bi-heart-fill');
        like.querySelector('.bi').classList.add('bi-heart');
    }
    else{
        like.querySelector('.bi').classList.remove('bi-heart');
        like.querySelector('.bi').classList.add('bi-heart-fill');
    }
}

//main?
inicializeSong();

//Adding the event listeners
playPause.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousMusic);
next.addEventListener('click', nextMusic);
like.addEventListener('click', likeDecider);
