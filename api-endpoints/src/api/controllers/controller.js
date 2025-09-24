const getHelloMessage = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to Maqdis Academy',
  });
};

const getSetoranData = (req, res) => {
  res.status(200).json({
    message: 'berhasil',
    id_setoran: 58,
    id_user: 3441,
    id_juz: 30,
  });
};

const createData = (req, res) => {
  res.status(201).json({
    data: 100,
    status: 'berhasil',
  });
};

const deleteData = (req, res) => {
  res.status(200).json({
    data: 0,
    status: 'berhasil hapus',
  });
};

module.exports = {
  getHelloMessage,
  getSetoranData,
  createData,
  deleteData,
};