function add(str) {
  if (!str) return 0;
  const normalized = str.replace(/\\n|\n/g, ",");
  const cleaned = normalized.replace(/[^0-9,.\-]/g, "");

  const numbers = cleaned
    .split(",")
    .filter((num) => num !== "")
    .map((num) => parseFloat(num));

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    console.log(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.reduce((acc, curr) => acc + curr, 0);
}
