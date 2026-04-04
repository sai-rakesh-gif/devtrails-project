export const calculatePayout = (plan) => {
  let base = 0;

  if (plan === "LOW") base = 400;
  if (plan === "MEDIUM") base = 600;
  if (plan === "HIGH") base = 800;

  const severityFactor = 0.6;

  return Math.floor(base * severityFactor);
};