import { Product } from "../types.js";
import { SETTINGS } from "../config/settings.js";

export function isGoodProduct(product: Product): boolean {
  if (!product.inStock) return false;

  if (product.currentPrice <= 0) return false;

  if ((product.rating ?? 0) < SETTINGS.MIN_RATING) return false;

  if ((product.reviewsCount ?? 0) < SETTINGS.MIN_REVIEWS) return false;

  return true;
}