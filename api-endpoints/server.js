const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  
  console.log('\nEnd-point');
  console.log(`  GET    http://localhost:${PORT}/api/hello`);
  console.log(`  GET    http://localhost:${PORT}/api/setoran`);
  console.log(`  POST   http://localhost:${PORT}/api/data`);
  console.log(`  POST   http://localhost:${PORT}/api/hapus-data`);
});