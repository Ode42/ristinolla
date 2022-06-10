export const tietokonePelaa = (nollat) => {
  let ruutu = Math.floor(Math.random() * 9);
  while (nollat.includes(ruutu)) {
    ruutu = Math.floor(Math.random() * 9);
  }
  return ruutu;
};

export const arvoRuutu = (eiKelpaavat) => {
  return Math.floor(Math.random() * 9);
};
