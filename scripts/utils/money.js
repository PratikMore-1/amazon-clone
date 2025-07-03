export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);

  /* moneyTeste.js : 26 */
  //return (priceCents / 100).toFixed(2);
}

export default formatCurrency; /*Each file can only have 1 default export*/
