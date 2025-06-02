export default function numeroALetras(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 1000) return "Número fuera de rango";

  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (n === 100) return "cien";
  if (n === 1000) return "mil";
  if (n < 10) return unidades[n];
  if (n >= 10 && n < 20) return especiales[n - 10];
  if (n < 30) {
    if (n === 20) return "veinte";
    return "veinti" + unidades[n - 20];
  }
  if (n < 100) {
    const d = Math.floor(n / 10);
    const u = n % 10;
    return decenas[d] + (u ? " y " + unidades[u] : "");
  }
  if (n < 1000) {
    const c = Math.floor(n / 100);
    const r = n % 100;
    return centenas[c] + (r ? " " + numeroALetras(r) : "");
  }

  return "";
}
