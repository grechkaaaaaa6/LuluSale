import { SETTINGS } from "../config/settings.js";

export type DealResult = {
  isDeal: boolean;
  level: "none" | "good" | "strong" | "anomaly";
  discountPercent: number;
  reason: string;
};

export function checkDeal(
  currentPrice: number,
  referencePrice: number
): DealResult {

  if (referencePrice <= 0) {
    return {
      isDeal: false,
      level: "none",
      discountPercent: 0,
      reason: "Нет эталонной цены"
    };
  }

  const discountPercent =
    ((referencePrice - currentPrice) / referencePrice) * 100;

  if (discountPercent >= SETTINGS.ANOMALY_DISCOUNT_PERCENT) {
    return {
      isDeal: true,
      level: "anomaly",
      discountPercent: Math.round(discountPercent),
      reason: "Аномально низкая цена"
    };
  }

  if (discountPercent >= SETTINGS.STRONG_DISCOUNT_PERCENT) {
    return {
      isDeal: true,
      level: "strong",
      discountPercent: Math.round(discountPercent),
      reason: "Сильная скидка"
    };
  }

  if (discountPercent >= SETTINGS.MIN_DISCOUNT_PERCENT) {
    return {
      isDeal: true,
      level: "good",
      discountPercent: Math.round(discountPercent),
      reason: "Хорошая скидка"
    };
  }

  return {
    isDeal: false,
    level: "none",
    discountPercent: Math.round(discountPercent),
    reason: "Недостаточная скидка"
  };
}