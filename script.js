document.addEventListener("DOMContentLoaded", function () {
    // Tampilkan tombol setelah lilin jatuh
    setTimeout(() => {
        document.getElementById("blowButton").style.display = "block";
    }, 7000); // Sesuaikan dengan delay animasi lilin

    // Fungsi untuk mematikan api
    document.getElementById("blowButton").addEventListener("click", function () {
        document.getElementById("flame").style.opacity = "0";
    });
});