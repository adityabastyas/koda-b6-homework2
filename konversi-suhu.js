let langkah = 1;
let temp = 0;
let tempSource = "";
let convertTo = "";
console.log("Masukkan angka suhu:");

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (langkah === 1) {
    temp = Number(input);
    if (typeof temp !== "number") {
      console.log("Suhu harus angka");
      process.exit();
    }
    console.log("Masukkan nama suhu awal (celcius/fahrenheit/kelvin/reamur):");
    langkah = 2;
  } else if (langkah === 2) {
    tempSource = input;
    console.log(
      "Masukkan nama suhu tujuan (celcius/fahrenheit/kelvin/reamur):"
    );
    langkah = 3;
  } else if (langkah === 3) {
    convertTo = input;

    let hasil = 0;
    let satuan = "";

    if (tempSource === "celcius") {
      if (convertTo === "fahrenheit") {
        hasil = temp * (9 / 5) + 32;
        satuan = "°F";
      } else if (convertTo === "kelvin") {
        hasil = temp + 273.15;
        satuan = "K";
      } else if (convertTo === "reamur") {
        hasil = (4 / 5) * temp;
        satuan = "°R";
      } else {
        console.log("Konversi tidak ada");
        process.exit();
      }
    } else if (tempSource === "fahrenheit") {
      if (convertTo === "celcius") {
        hasil = (temp - 32) * (5 / 9);
        satuan = "°C";
      } else if (convertTo === "kelvin") {
        hasil = (5 / 9) * (temp - 32) + 273;
        satuan = "K";
      } else if (convertTo === "reamur") {
        hasil = (temp - 32) * (4 / 9);
        satuan = "°R";
      } else {
        console.log("Konversi tidak ada");
        process.exit();
      }
    } else if (tempSource === "kelvin") {
      if (convertTo === "celcius") {
        hasil = temp - 273.15;
        satuan = "°C";
      } else if (convertTo === "fahrenheit") {
        hasil = (temp - 273.15) * (9 / 5) + 32;
        satuan = "°F";
      } else if (convertTo === "reamur") {
        hasil = (4 / 5) * (temp - 273.15);
        satuan = "°R";
      } else {
        console.log("Konversi tidak ada");
        process.exit();
      }
    } else if (tempSource === "reamur") {
      if (convertTo === "celcius") {
        hasil = (5 / 4) * temp;
        satuan = "°C";
      } else if (convertTo === "fahrenheit") {
        hasil = (temp * 9) / 4 + 32;
        satuan = "°F";
      } else if (convertTo === "kelvin") {
        hasil = (temp * 5) / 4 + 273.15;
        satuan = "K";
      } else {
        console.log("Konversi tidak ada");
        process.exit();
      }
    } else {
      console.log("Konversi tidak ada");
      process.exit();
    }

    console.log("Hasil:", hasil, satuan);
    process.exit();
  }
});
