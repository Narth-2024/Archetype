function fmtNum(n: number): string {
  return n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
}

export function ft(feet: number): string {
  const m = feet * 0.3048;
  if (feet === 0) return "0 m";
  if (Math.abs(m) < 3) return `${fmtNum(Math.round(m * 10) / 10)} m`;
  return `${Math.round(m)} m`;
}

export function ftRange(range: string): string {
  if (!range || !/\d/.test(range)) return range;
  const converted = range
    .split("/")
    .map((part) => {
      const n = Number(part.trim());
      if (Number.isNaN(n)) return part.trim();
      const m = n * 0.3048;
      return String(Math.abs(m) < 3 ? Math.round(m * 10) / 10 : Math.round(m));
    })
    .join("/");
  return `${converted} m`;
}

export function ftText(text: string): string {
  return text.replace(/(\d+)\s*pés/g, (_, n: string) => ft(Number(n)));
}

export function lbToKg(pounds: number): string {
  return fmtNum(Math.round(pounds * 0.4536 * 10) / 10);
}
