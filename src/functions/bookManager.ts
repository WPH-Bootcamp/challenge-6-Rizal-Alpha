import { IBooks } from '../types';
import readlineSync from 'readline-sync';
import { booksArr } from '../data/books';

// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

//Fungsi inputBook
//buat void aja, karna nda perlu melapor ulang (return)
export function inputBook(): void {
  const title = readlineSync.question('Apa nama buku yang ingin dimasukkan? ');
  const author = readlineSync.question('Siapa nama penulis buku tersebut? ');
  const publicationYear = Number(
    readlineSync.question('Tahun berapa buku itu rilis? ')
  );
  const inputUser: IBooks = {
    title,
    author,
    publicationYear,
  };

  booksArr.push(inputUser);
}

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
// booksArr.push(inputUser);

export function addBook(book: IBooks[]): IBooks[] {
  booksArr.push(...book);
  return booksArr;
}

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
// 1. Atomic Habits — James Clear (2018)
export function displayBooks(books: IBooks[]): void {
  console.log('\nDAFTAR BUKU FAVORIT ANDA:');
  books.forEach((book: IBooks, index: number) => {
    //nomor dari 1
    console.log(
      `${index + 1}. ${book.title} — ${book.author} (${book.publicationYear})`
    );
  });
}

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
export function searchBook(
  books: IBooks[],
  filter: (book: IBooks) => boolean
): IBooks[] {
  return books.filter(filter);
}

export function chooseSearch(): void {
  while (true) {
    // Ambil pilihan kategori
    const pilihan = readlineSync.question(
      'Ingin ditampilkan berdasarkan apa? tekan "t" (judul), "a" (penulis), "y" (tahun) => '
    );

    if (pilihan.toLowerCase() === 't') {
      const cariJudul = readlineSync.question('Masukkan judul buku: ');
      const hasil = searchBook(booksArr, (b) =>
        b.title.toLowerCase().includes(cariJudul.toLowerCase())
      );
      console.log('Hasil Pencarian Judul:');
      displayBooks(hasil);
      break;
    } else if (pilihan.toLowerCase() === 'a') {
      const cariAuthor = readlineSync.question('Masukkan nama penulis: ');
      const hasil = searchBook(booksArr, (b) =>
        b.author.toLowerCase().includes(cariAuthor.toLowerCase())
      );
      console.log('Hasil Pencarian Penulis:');
      displayBooks(hasil);
      break;
    } else if (pilihan.toLowerCase() === 'y') {
      while (true) {
        const rawTahun = readlineSync.question(
          'Masukkan tahun terbit yang dicari: '
        );
        const cariTahun = Number(rawTahun);
        if (isNaN(cariTahun) || rawTahun.trim() === '') {
          console.log(
            'Input harus berupa angka tahun!, masukkan dalam angka tahun'
          );
        } else {
          const hasil = searchBook(
            booksArr,
            (b) => b.publicationYear === cariTahun
          );
          console.log('Hasil Pencarian untuk Tahun:');
          displayBooks(hasil);
          return;
        }
      }
    } else {
      console.log('Pilihan tidak valid! Masukkan t, a, atau y.');
    }
  }
}

//fungsi looping
export function firstLoop(): void {
  while (true) {
    const start = readlineSync.question('Selamat datang, ayo mulai (y/n) => ');
    if (start.toLowerCase() === 'y') {
      // return startApp();
      inputBook();
      return;
    } else if (start.toLowerCase() === 'n') {
      console.log('Oke, have a nice day');
      break;
    } else console.log('Tolong input hanya y/n');
  }
}

export function loopAgain(): void {
  while (true) {
    const again = readlineSync.question(
      'Apa masih ingin menginput buku favorit Anda?(y/n) => '
    );
    if (again.toLowerCase() === 'y') {
      firstLoop();
    } else if (again.toLowerCase() === 'n') {
      console.log(
        'Oke terimakasih, telah menggunakan aplikasi ini, berikut list favorit terkini:'
      );
      displayBooks(booksArr);
      break;
    } else console.log('harap hanya masukkan y/n');
  }
}
