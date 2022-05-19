export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export function convertToBRL(etherPrice: number) {
  return etherPrice * 9494.86
}