import { db } from "../db/database.js";

export function getPriceHistory(
  marketplace: string,
  externalId: string
) {
  return db.prepare(`
    SELECT
      ps.price,
      ps.old_price,
      ps.collected_at
    FROM price_snapshots ps
    JOIN products p ON p.id = ps.product_id
    WHERE p.marketplace = ?
      AND p.external_id = ?
    ORDER BY ps.collected_at DESC
  `).all(marketplace, externalId);
}

export function getMedianPrice(
  marketplace: string,
  externalId: string
): number | null {
  const rows = db.prepare(`
    SELECT ps.price
    FROM price_snapshots ps
    JOIN products p ON p.id = ps.product_id
    WHERE p.marketplace = ?
      AND p.external_id = ?
      AND ps.in_stock = 1
    ORDER BY ps.price ASC
  `).all(marketplace, externalId) as { price: number }[];

  if (rows.length < 2) return null;

  const middle = Math.floor(rows.length / 2);

  if (rows.length % 2 === 0) {
    return Math.round((rows[middle - 1].price + rows[middle].price) / 2);
  }

  return rows[middle].price;
} 