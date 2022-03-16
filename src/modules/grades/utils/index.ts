export const getLabel = (p: number) => {
  if (p >= 85 && p <= 100) return "Výborně";
  if (p >= 65 && p <= 84) return "Chalitebně";
  if (p >= 45 && p <= 64) return "Dobře";
  if (p >= 30 && p <= 44) return "Dostatečně";
  if (p >= 0 && p <= 29) return "Nedostatečně";
  return "";
};
