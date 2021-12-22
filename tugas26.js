console.log("INFINITY OR NOT INFINITY\n=================================");
const bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

for (let i = 0; i < bilangan.length; i++) {
  if (isFinite(bilangan) !== true) {
    console.log("Angka", bilangan[i], "NOT Infinity.");
  } else {
    console.log("Angka", bilangan[(i, "IS Infinity.")]);
  }
}

console.log("\n=================================");

bilangan.forEach((number) => {
  if (isFinite(bilangan) === false) {
    console.log("Angka", number, "NOT Infinity.");
  } else {
    console.log("Angka", number, "IS Infinity.");
  }
});
