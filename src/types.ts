export type Marketplace = "wb" | "ozon" | "yandex";

export type Product = {
  marketplace: Marketplace;
  externalId: string;

  title: string;
  url: string;
  imageUrl?: string;

  brand?: string;
  category?: string;

  currentPrice: number;
  oldPrice?: number;

  rating?: number;
  reviewsCount?: number;

  inStock: boolean;
};