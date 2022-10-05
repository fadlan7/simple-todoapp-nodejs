function ubahNama(dataName) {
  return dataName.map((data, index) => {
    return { ...data, title: `${index + 1}.${data.title} DARI HELPER` };
  });
}

module.exports = ubahNama;
