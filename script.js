const form = document.getElementById("formGame");
const judul = document.getElementById("judul");
const genre = document.getElementById("genre");
const daftar = document.getElementById("daftarGame"); 

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (judul.value === "" || genre.value === "") {
        alert("ISI LAH GAMENYA");
        return;
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${judul.value}</td>
        <td>${genre.value}</td>
    `;

    daftar.appendChild(newRow);

    judul.value = "";
    genre.value = "";
});