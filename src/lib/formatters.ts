const decimalFormatter = new Intl.NumberFormat("es-CO", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function formatDecimal(value: number): string {
  return decimalFormatter.format(value);
}

export function formatLitres(value: number): string {
  return `${formatDecimal(value)} L`;
}
