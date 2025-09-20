//Mood Playlist
let player;
let currentSongIndex = 0;
let playlist = [];
let selectedMood = "happy";

// 1. Load the YouTube IFrame Player API script
// This function will be called automatically once the API is ready
function onYouTubeIframeAPIReady(){
     // Wait until JSON loads
}

// Load JSON file with selected mood & Songs
fetch("songs.json")
    .then(res => res.json()) //a method that reads the response stream and parses the data as JSON (JavaScript Object Notation).
    .then(data => {
        playlist = data[selectedMood].songs;
        if(playlist.length > 0){
            loadSong(currentSongIndex);
        }        
    }) 
    .catch(error => console.error('Error loading songs.json:', error));

//Load Songs
function loadSong(index){
    const songs = playlist[index];
    document.getElementById("songTitle").textContent = songs.Songtitle;
    document.getElementById("singerName").textContent = songs.Singer;

    //Replace cover with Youtube Player
       if (songs.videoId) {
        document.getElementById("cover").innerHTML = '<div id="ytplayer"></div>';
            if (player) {
                player.loadVideoById(song.videoId);
            } else {
                player = new YT.Player("ytplayer", {
                    width: "80%",
                    height: "300",
                    videoId: song.videoId,
                    playerVars: { autoplay: 1, controls: 0 }
                });
            }
        } else {
            document.getElementById("cover").innerHTML =
                `<img src="Assets/GIFs/${cover}" alt="moodCover"/>`;
        }
}

    //Controls
    document.getElementById("playPause").addEventListener("click", () => {
        if(player.getPlayerState() === YT.PlayerState.PLAYING){
            player.pauseVideo();
            document.getElementById("playPause").textContent = "▶";
        } else {
            player.playVideo();
            document.getElementById("playPause").textContent = "⏸";
        }
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1  % playlist.length);
        loadSong(currentSongIndex);
    });

    
