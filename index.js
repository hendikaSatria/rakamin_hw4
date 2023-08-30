var even = [];
var odd = [];

//generate random array dengan length 100 dan value mulai dari 1 sampai 50
const randomArray = () => {
    const randomArray = [];

    for (let i = 0; i < 100; i++) {
        const rng = Math.floor(Math.random() * (50) + 1);
        randomArray.push(rng);
    }

    return randomArray;
}

// split value array berdasarkan index genap ganjil
const split = (arr) => {
    for(let i = 0; i < 100; i++){
        i % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
}

// untuk min dan max, karna tidak boleh memakai function bawaan js
const sorting = (arr) => {
    const midIndex = Math.floor(arr.length / 2); // index nilai tengah
    const mid = arr[midIndex]; // nilai tengah untuk mengcompare
    const lowerSide = []; // array nilai di bawah nilai tengah
    const upperSide = []; // array nilai di atas nilai tengah

    // best case kalau length di bawah 1
    // harus di tulis code ini atau di repl akan me-return error maximum stack exceeded
    if (arr.length <= 1) {
        return arr;
    }
    
      for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) { // skip nilai tengah
          continue;
        } else if (arr[i] < mid) {  // jika value di bawah mid push ke lowerSide Array
          lowerSide.push(arr[i]);
        } else {                    // vice versa
          upperSide.push(arr[i]);
        }
      }
      
      return [...sorting(lowerSide), mid, ...sorting(upperSide)]; // men-sort lowerSide dan upperSide sampai selesai dan menggabungkan dengan nilai tengah
}

// value terkecil
const min = (arr) =>{ 
    const sortedArray = sorting(arr);
    return sortedArray[0];
}

// value terbesar
const max = (arr) =>{
    const sortedArray = sorting(arr);
    return sortedArray[arr.length - 1];
}

// total value
const total = (arr) => {
    let result = 0;

    for (let i = 0; i < 50; i++){
        result += arr[i];
    }

    return result;
}

//rata-rata
const avg = (arr) => {
    return total(arr)/arr.length;
}

split(randomArray());
console.log(
    min(even) === min(odd)
        ? `Value terkecil array Genap dan Ganjil Sama : Min genap ${min(even)} - Min ganjil ${min(odd)}`
        : min(even) > min(odd)
        ? `Value terkecil array Genap lebih besar: Min genap ${min(even)} - Min ganjil ${min(odd)}`
        : `Value terkecil array Ganjil lebih besar: Min genap ${min(even)} - Min ganjil ${min(odd)}`
);

console.log(
    max(even) === max(odd)
        ? `Value terbesar array Genap dan Ganjil Sama : Max genap ${max(even)} - Max ganjil ${max(odd)}`
        : max(even) > max(odd)
        ? `Value terbesar array Genap lebih besar: Max genap ${max(even)} - Max ganjil ${max(odd)}`
        : `Value terbesar array Ganjil lebih besar: Max genap ${max(even)} - Max ganjil ${max(odd)}`
);

console.log(
    avg(even) === avg(odd)
        ? `Rata-rata value array Genap dan Ganjil Sama: Rata-rata genap ${avg(even)} - Rata-rata ganjil ${avg(odd)}`
        : avg(even) > avg(odd)
        ? `Rata-rata value array Genap lebih besar: Rata-rata genap ${avg(even)} - Rata-rata ganjil ${avg(odd)}`
        : `Rata-rata value array Ganjil lebih besar: Rata-rata genap ${avg(even)} - Rata-rata ganjil ${avg(odd)}`
);

console.log(
    total(even) === total(odd)
        ? `Total value array Genap dan Ganjil Sama: Total genap ${total(even)} - Total ganjil ${total(odd)}`
        : total(even) > total(odd)
        ? `Total Value array Genap lebih besar: Total genap ${total(even)} - Total ganjil ${total(odd)}`
        : `Total Value array Ganjil lebih besar: Total genap ${total(even)} - Total ganjil ${total(odd)}`
);