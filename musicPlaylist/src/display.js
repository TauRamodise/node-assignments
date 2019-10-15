// initialize database url
let url = "mongodb://localhost:27017/playlist";

async function viewAllArtists(){
let getArtist = await fetch(url, {method:'GET'});
let displayArtist = await getArtist.json();

let viewArtists = document.getElementById('viewArtist')
displayArtist.map(artist => {
    const listArtists = document.createElement("LI").textContent = `name: ${artist.artist}  id: ${artist._id}`
    listArtists.appendChild(viewArtists)
});
}

viewAllArtists()