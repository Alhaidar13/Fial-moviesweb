// Array berisi name student
const students = [
    "Alya", "Ariana", "bolen", "Maria", "Anna", 
    "Oleg", "Alex", "Olga", "Anantasian", "Ursk",
    "Davis", "Ryan", "Boyka", "Naria", "Gervonta",
    "Sofia", "Eva", "Andre", "Andriana","Polina", "Lushki"
];

// Tampilanberisi banyak nama siswa in terminal
console.log("Daftar Siswa:");
students.forEach((name, index) => {
    console.log('${index + 1}. ${name}');
    });
 