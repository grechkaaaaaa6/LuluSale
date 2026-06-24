import { initSchema } from "./db/schema.js";
import { saveProduct } from "./db/database.js";

import { parseWbSearch } from "./parsers/wb.js";

import { getMedianPrice } from "./services/priceHistory.js";
import { checkDeal } from "./services/dealChecker.js";
import { buildDeal } from "./services/dealBuilder.js";
import { formatDealMessage } from "./services/telegramFormatter.js";
import { isGoodProduct } from "./services/productFilter.js";

async function main() {
  initSchema();

  const products = await parseWbSearch("пылесос");

  console.log(`Найдено товаров: ${products.length}`);

  for (const product of products) {
    if (!isGoodProduct(product)) {
      console.log(`Пропущен товар: ${product.title}`);
      continue;
    }

    const medianPrice = getMedianPrice(
      product.marketplace,
      product.externalId
    );

    const referencePrice = Math.max(
      medianPrice ?? 0,
      product.oldPrice ?? 0,
      product.currentPrice
    );

    const result = checkDeal(
      product.currentPrice,
      referencePrice
    );

    saveProduct(product);

    if (!result.isDeal) {
      console.log(`Не скидка: ${product.title}`);
      continue;
    }

    const deal = buildDeal({
      marketplace: product.marketplace,
      productId: product.externalId,
      title: product.title,
      brand: product.brand,
      category: product.category,
      url: product.url,
      imageUrl: product.imageUrl,
      currentPrice: product.currentPrice,
      referencePrice,
      discountPercent: result.discountPercent,
      level: result.level,
      rating: product.rating,
      reviewsCount: product.reviewsCount
    });

    console.log("-----");
    console.log(formatDealMessage(deal));
  }
}

main().catch(console.error);