 (function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
          
          var currentAlbum = Fixtures.getAlbum();



         
/**
* @desc Buzz object audio file
* @type {Object}
*/
 var currentBuzzObject = null;

/*
* @function playSong
* @desc Plays Audio file as CurrentBuzzObject and sets song.playing property to true
* @param {Object} song
*/
 var playSong = function (song){
             currentBuzzObject.play();
             song.playing = true;
         };
                
 var setSong = function(song) {
             if(currentBuzzObject){
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
             }
             
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });
             
             SongPlayer.currentSong = song;
         };
   
/*
* @function getSongIndex
* @desc returns the index of passed through song
* @param {object} song
*/
 var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };
         

/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/         
 SongPlayer.currentSong = null;
    
SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                currentBuzzObject.play();
                }
            }
         };
         
SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };

/*
*@scope public
*@function previous
*@desc Takes in the currently playing song's index and subtracts 1 from it. If the current song is 0 index then it will stop the song and start at index 0 again.
*/
SongPlayer.previous = function() {
    var currentSongIndex = getSongIndex(SongPlayer.currentSong);
    currentSongIndex--;
    
    if (currentSongIndex < 0){
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
    } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
    }
};
        
         return SongPlayer;
         }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();