const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- Selamat Datang di Game Werewolf ---');

rl.question('Masukkan namamu: ', (nama) => {
  if (!nama) {
    console.log('Nama harus diisi!');
    rl.close();
    return;
  }

  rl.question('Pilih peranmu (Penyihir, Guard, atau Werewolf): ', (peran) => {
    if (!peran) {
      console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
    } else {
      console.log(`\nSelamat datang di Dunia Werewolf, ${nama}.`);
      if (peran.toLowerCase() === 'penyihir') {
        console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);
      } else if (peran.toLowerCase() === 'guard') {
        console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
      } else if (peran.toLowerCase() === 'werewolf') {
        console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`);
      } else {
        console.log(`Peran "${peran}" tidak valid. Silakan pilih di antara Penyihir, Guard, atau Werewolf.`);
      }
    }
    rl.close();
  });
});
