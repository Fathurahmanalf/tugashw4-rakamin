// Array bilangan 100
const nialiarray = [];
const arrayGenap = [];
const arrayGanjil = [];
const arrayAcak = [];

for (let i = 0; i < 100; i++) {
  const nilaiAcak = Math.floor(Math.random() * 100) + 1; 
  arrayAcak.push(nilaiAcak);

  if (nilaiAcak % 2 === 0) {
    arrayGenap.push(nilaiAcak);
  } else {
    arrayGanjil.push(nilaiAcak);
  }
}

// Menghitung nilai minimum
function hitungMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Menghitung nilai maksimum 
function hitungMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Menghitung total 
function hitungTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Menghitung rata-rata
function hitungRataRata(arr) {
  const total = hitungTotal(arr);
  return total / arr.length;
}

// Fungsi untuk menghitung statistik (min, max, total, dan rata-rata) dari sebuah array
function hitungperbandingan(arr) {
  let min = arr[0];
  let max = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    total += arr[i];
  }

  const rataRata = total / arr.length;
  return { min, max, total, rataRata };
}

// Hasil Array acak,genap, dan ganjil
console.log("Array Acak:");
console.log(arrayAcak);

console.log("\nArray Bilangan Genap:");
console.log(arrayGenap);

console.log("\nArray Bilangan Ganjil:");
console.log(arrayGanjil);

// Menghitung min,max,total,dan rata-rata dari array genap dan ganjil
const minGenap = hitungMin(arrayGenap);
const maxGenap = hitungMax(arrayGenap);
const totalGenap = hitungTotal(arrayGenap);
const rataRataGenap = hitungRataRata(arrayGenap);

const minGanjil = hitungMin(arrayGanjil);
const maxGanjil = hitungMax(arrayGanjil);
const totalGanjil = hitungTotal(arrayGanjil);
const rataRataGanjil = hitungRataRata(arrayGanjil);

console.log("\nHasil Array Bilangan Genap:");
console.log("Min:", minGenap);
console.log("Max:", maxGenap);
console.log("Total:", totalGenap);
console.log("Rata-rata:", rataRataGenap);

console.log("\nHasil Array Bilangan Ganjil:");
console.log("Min:", minGanjil);
console.log("Max:", maxGanjil);
console.log("Total:", totalGanjil);
console.log("Rata-rata:", rataRataGanjil);

// Menghitung perbandingan untuk array genap dan ganjil
const perbandinganGenap = hitungperbandingan(arrayGenap);
const perbandinganGanjil = hitungperbandingan(arrayGanjil);

// Menampilkan hasil perbandingan 
console.log("\nPerbandingan Array Bilangan Genap:");
console.log(perbandinganGenap);

console.log("\nPerbandingan Array Bilangan Ganjil:");
console.log(perbandinganGanjil);
