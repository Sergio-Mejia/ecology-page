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

const preciseFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 2,
});

export function formatPrecise(value: number): string {
  return preciseFormatter.format(value);
}
