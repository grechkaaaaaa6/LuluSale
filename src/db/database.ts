import Database from "better-sqlite3";
import { Product } from "../types.js";

export const db = new Database("lulusale.sqlite");

export function saveProduct(product: Product) {
  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products
    (marketplace, external_id, title, url, image_url)
    VALUES (?, ?, ?, ?, ?)
  `);

  insertProduct.run(
    product.marketplace,
    product.externalId,
    product.title,
    product.url,
    product.imageUrl ?? null
  );

  const row = db.prepare(`
    SELECT id
    FROM products
    WHERE marketplace = ?
      AND external_id = ?
  `).get(
    product.marketplace,
    product.externalId
  ) as { id: number };

  db.prepare(`
    INSERT INTO price_snapshots
    (product_id, price, old_price, in_stock)
    VALUES (?, ?, ?, ?)
  `).run(
    row.id,
    product.currentPrice,
    product.oldPrice ?? null,
    product.inStock ? 1 : 0
  );
}