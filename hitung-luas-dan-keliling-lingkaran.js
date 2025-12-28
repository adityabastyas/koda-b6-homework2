let langkah = 1;
let r = 0;
let pilihan = "";
console.log("Masukkan angka jari-jari:");

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (langkah === 1) {
    r = Number(input);
    console.log("Menghitung luas atau keliling ?");
    langkah = 2;
  } else if (langkah === 2) {
    pilihan = input;

    let phi = 0;
    if (r % 7 === 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }

    if (pilihan === "luas") {
      const luas = phi * r * r;
      console.log("Luas lingkaran:", luas);
    } else if (pilihan === "keliling") {
      const keliling = 2 * phi * r;
      console.log("Keliling lingkaran:", keliling);
    } else {
      console.log("Pilihan tidak ada");
    }

    process.exit();
  }
});
