"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
/* contoh:
File mathUtils.ts:
export const add = (a: number, b: number) => a + b;
export const PI = 3.14;

File main.ts (Cara memanggilnya):
import { add, PI } from './mathUtils';
console.log(add(2, PI));
*/
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
const inputTest = [
    { title: 'Atomic Habit', Author: 'James Clear', publicationYear: 2012 },
    { title: 'Deep Focus', Author: 'Cal Newport', publicationYear: 2015 },
    { title: 'Grit', Author: 'Angela Duckworth', publicationYear: 2020 },
];
