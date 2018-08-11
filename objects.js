// assign an object to the variable playlist and initialize the object with a key-value pair - they keys will be artist names and the values will be song titles
var playlist = {
  Clapton: "Layla"
};

// create a function updatePlaylist, that accepts three parameters: the playlist(an object), an artistName (a string), and a songTitle. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};


//create a function removeFromPlaylist, that accepts two parameters, playlist(an object), artistName (a string), The body of the function should delete the key-value pair from the playlist and return the updated playlist
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}