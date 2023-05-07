const TmpCalculator = (formInput) => {
  console.log("nitrogen_norm", formInput);
  // return new Promise((resolve, reject) => {
  let carbon_mol = formInput.carbon / 12;
  let hydrogen_mol = formInput.hydrogen / 1;
  let oxygen_mol = formInput.oxygen / 16;
  let nitrogen_mol = formInput.nitrogen / 14;
  console.log(carbon_mol, hydrogen_mol, oxygen_mol, nitrogen_mol);

  let carbon_norm = carbon_mol / carbon_mol;
  let hydrogen_norm = hydrogen_mol / carbon_mol;
  let oxygen_norm = oxygen_mol / carbon_mol;
  let nitrogen_norm = nitrogen_mol / carbon_mol;
  //   =(1/8)*((4*H2+J2-2*N2-3*L2)/(12*H2+J2+16*N2+14*L2))*22.4
  let theoritical_tmp =
    (1 / 8) *
    ((4 * carbon_mol + hydrogen_norm - 2 * oxygen_norm - 3 * nitrogen_norm) /
      (12 * carbon_norm +
        hydrogen_norm +
        16 * oxygen_norm +
        14 * nitrogen_norm)) *
    22.4;

  let theoritical_tmp_LperKg = theoritical_tmp*1000;
  return Number(theoritical_tmp_LperKg).toFixed(3);
  // });
};

export default TmpCalculator;

// console.log(theoritical_tmp);
// if (theoritical_tmp >= 0) {
//   console.log("theoritical_tmp", theoritical_tmp);
//   resolve(theoritical_tmp);
// } else {
//   reject(0);
// }
