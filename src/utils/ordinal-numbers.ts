export const ordinalNumbers = (n: number): string => {
  const s: string[] = ["th", "st", "nd", "rd"];

  const v: number = n % 100;

  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
