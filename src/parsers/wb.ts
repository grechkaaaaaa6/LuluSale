import { Product } from "../types.js";

export async function parseWbSearch(query: string): Promise<Product[]> {
  return [
    {
      marketplace: "wb",
      externalId: "wb-test-1",
      title: "Пылесос вертикальный Xiaomi",
      brand: "Xiaomi",
      category: query,
      url: "https://www.wildberries.ru/catalog/123/detail.aspx",
      currentPrice: 7990,
      oldPrice: 12990,
      rating: 4.8,
      reviewsCount: 532,
      inStock: true
    },
    {
      marketplace: "wb",
      externalId: "wb-test-2",
      title: "Фен Dyson Supersonic",
      brand: "Dyson",
      category: query,
      url: "https://www.wildberries.ru/catalog/456/detail.aspx",
      currentPrice: 18990,
      oldPrice: 29990,
      rating: 4.9,
      reviewsCount: 2847,
      inStock: true
    }
  ];
}