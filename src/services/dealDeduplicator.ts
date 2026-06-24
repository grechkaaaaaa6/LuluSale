import Deal from "../types/deal";

export function deduplicateDeals(deals: Deal[]): Deal[] {
  const seen = new Map<string, Deal>();

  for (const deal of deals) {
    const key = `${deal.title?.trim().toLowerCase() ?? ""}|${deal.price}|${deal.vendor?.trim().toLowerCase() ?? ""}`;
    const existing = seen.get(key);

    if (!existing) {
      seen.set(key, deal);
      continue;
    }

    if (!existing.priceHistory || existing.priceHistory.length === 0) {
      seen.set(key, deal);
      continue;
    }

    if (deal.priceHistory && deal.priceHistory.length > 0) {
      seen.set(key, deal.updatedAt && existing.updatedAt && deal.updatedAt > existing.updatedAt ? deal : existing);
    }
  }

  return Array.from(seen.values());
}

export default { deduplicateDeals };
