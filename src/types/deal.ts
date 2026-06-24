export type DealLevel = "good" | "strong" | "anomaly";

export type Deal = {
  marketplace: "wb" | "ozon" | "yandex";
  productId: string;
  title: string;
  brand?: string;
  category?: string;
  url: string;
  imageUrl?: string;
  currentPrice: number;
  referencePrice: number;
  discountPercent: number;
  level: DealLevel;
  rating?: number;
  reviewsCount?: number;
  detectedAt: Date;
};