import { Deal } from "../types/deal.js";

export function buildDeal(
  data: Omit<Deal, "detectedAt">
): Deal {
  return {
    ...data,
    detectedAt: new Date()
  };
}