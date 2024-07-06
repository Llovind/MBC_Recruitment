
    document.addEventListener("DOMContentLoaded", function () {
        // Ambil semua link dalam navbar
        const links = document.querySelectorAll('.navbar a');

        // Tambahkan event listener untuk setiap link
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Hindari navigasi bawaan
                // Hapus kelas active dari semua link
                links.forEach(link => link.classList.remove('active'));
                // Tambahkan kelas active ke link yang diklik
                this.classList.add('active');

                // Ambil URL dari atribut href link yang diklik
                const url = this.getAttribute('href');

                // Pindahkan pengguna ke halaman yang sesuai
                window.location.href = url;
            });
        });

        // Tambahkan logika untuk mempertahankan status aktif pada muatan halaman
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'index.html') {
            document.getElementById('utama-link').classList.add('active');
        } else if (currentPage === 'divisi.html') {
            document.getElementById('divisi-link').classList.add('active');
        } else if (currentPage === 'kontak.html') {
            document.getElementById('kontak-link').classList.add('active');
        } else if (currentPage === 'identitas.html') {
            document.getElementById('identitas-link').classList.add('active');
        }
    });
