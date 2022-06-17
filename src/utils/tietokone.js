export const tietokonePelaa = (nollat) => {
  let ruutu = Math.floor(Math.random() * 9);
  while (nollat.includes(ruutu)) {
    ruutu = Math.floor(Math.random() * 9);
  }
  return ruutu;
};

export const arvoRuutu = (ruudut, eiKelpaavat) => {
  const kelpaavat = ruudut.filter((ruutu) => !eiKelpaavat.includes(ruutu));
  const ruutu = kelpaavat[Math.floor(Math.random() * kelpaavat.length)];
  return ruutu;
};
