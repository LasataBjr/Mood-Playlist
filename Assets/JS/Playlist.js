//Mood Playlist
let player;
let currentSongIndex = 0;
let playlist = [];
let selectedMood = "happy";

// Load JSON file with selected mood & Songs
fetch("songs.json")
    .then(res => res.json()) //a method that reads the response stream and parses the data as JSON (JavaScript Object Notation).
    .then(data => {
        playlist = data[selectedMood];
        loadSong(currentSongIndex);
    }); 

//Load Songs
function loadSong(index){
    
}
    
