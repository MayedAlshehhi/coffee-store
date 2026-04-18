var map = L.map("map").setView([25.2048, 55.2708], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker([25.2048, 55.2708]).addTo(map)
  .bindPopup("Brew Haven Coffee Store")
  .openPopup();