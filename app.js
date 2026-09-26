/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");


// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Script app.js Telah Terhubung");
=======
// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI = "Sabe Couffe";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let NAMA_KASIR = "Adinda Hulya";
let  SHIFT_KERJA = ["Pagi, Sore, Malam"];
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Kedai : " + NAMA_KEDAI); 
console.log("Shift kerja : " + SHIFT_KERJA);
console.log("Nama Kasir : " + NAMA_KASIR);
=======
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().



// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
NAMA_KASIR = "Keenan Aditya";
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Nama Kasir: " + NAMA_KASIR);
=======
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.origin/main




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("HAI, Selamat Datang di Kedai Kopi kami")
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let NAMA_PELANGGAN = prompt("Ayo Masukan nama kamu untuk memulai!");
// 3. Gunakan percabangan "if - else":
if (NAMA_PELANGGAN) {
    alert("Haloww, " + NAMA_PELANGGAN + "Yuk, pesan kopi favorit kamu!.");
    console.log("Pelanggan : " + NAMA_PELANGGAN);
} else {
    alert("Kamu tidak memasukan nama. Kamu akan dipanggil Anonim");
    NAMA_PELANGGAN = "Pelanggan Anonim";
    console.log("Pelanggan Anonim" + NAMA_PELANGGAN);
}
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan
=======
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let POINT_KOPI = 45; 
let POINT_MAKANAN = 35; 
let POINT_MERCHANDISE = 20;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let TOTAL_POINT = POINT_KOPI + POINT_MAKANAN + POINT_MERCHANDISE;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== Point " + NAMA_PELANGGAN + "===");
console.log("Kopi : " + POINT_KOPI);
console.log("Makanan: " + POINT_MAKANAN);
console.log("Merchandise : " + POINT_MERCHANDISE);
console.log("Total Point Anda Adalah" + TOTAL_POINT);
=======
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// let tierMember = "";
// let benefit = "";

// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// if (TOTAL_POINT >= 100) {
//     tierMember = "Platinum";
//     benefit = "Diskon 20% + Gratis 1 Minuman Signature";
// } else if (TOTAL_POINT >= 70) {
//     tierMember = "Gold ";
//     benefit = "Diskon 10% di setiap transaksi";
// } else if (TOTAL_POINT >= 40) {
//     tierMember = "Silver";
//     benefit = "Diskon 5% untuk menu minuman";
// } else {
//     tierMember = "Bronze";
//     benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
// } 
// 3. Cetak hasil tierMember dan benefit ke Console.
// console.log("Tier Member Anda adalah :" + tierMember);
// console.log(" Benefit : " + benefit);
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
// alert(
//     "Pelanggan : " + NAMA_PELANGGAN +
//     "\n Total Point : " + TOTAL_POINT +
//     "\n Member: " + tierMember +
//     "\n Benevit : " + benefit
// );
=======
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().




>>>>>>> origin/main
// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
<<<<<<< HEAD
// function hitungTotalPoin(p1, p2, p3) {
//     let Total = p1 + p2 + p3; 
//     return Total; 
// }
=======



>>>>>>> origin/main

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.




// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
<<<<<<< HEAD
// let TOTAL_POINT_B = hitungTotalPoin(35, 25, 20);
// let TOTAL_POINT_C = hitungTotalPoin(15, 10, 5);

// console.log("Pelanggan B - Total Point : " + TOTAL_POINT_B);
// console.log("Pelanggan B - Tier : " + MemberTier(TOTAL_POINT_B));

// console.log("Pelanggan C - Total Point : " + TOTAL_POINT_C);
// console.log("Pelanggan C - Tier : " + MemberTier(TOTAL_POINT_C));
=======


>>>>>>> origin/main


// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
<<<<<<< HEAD
// let MENU_REKOMENDASI = [
//     "Caramel Macchiato",
//     "Kopi Susu Gula Aren",
//     "Croissant Butter Keju",
//     "Matcha Cream Latte",
//     "Cinnamon Roll Hangat"
// ];
=======



>>>>>>> origin/main

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
<<<<<<< HEAD
// for(let i = 0; i < MENU_REKOMENDASI.length; i++) {
//     console.log ((i + 1) + ". " + MENU_REKOMENDASI[i]);
// }
=======


>>>>>>> origin/main


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
<<<<<<< HEAD
// console.log("JUMLAH MENU : " + MENU_REKOMENDASI.length);
// console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! WAR IS OVERRRR ===");
=======

>>>>>>> origin/main
