const map = L.map('restoMap').setView([41.40193410514358, 2.159369674750497], 14).on('load', showMap);
const tilesURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

L.tileLayer(tilesURL, { attribution }).addTo(map);

function showMap() {
    console.log('Mapa carregat');
}