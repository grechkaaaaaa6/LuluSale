import { Deal } from "../types/deal.js";

export function formatDealMessage(deal: Deal): string {
  const levelEmoji = {
    good: "💚",
    strong: "🔥",
    anomaly: "🚨"
  }[deal.level];

  const marketplaceName = {
    wb: "Wildberries",
    ozon: "Ozon",
    yandex: "Яндекс.Маркет"
  }[deal.marketplace];

  return `
${levelEmoji} ${deal.title}

💰 Сейчас: ${deal.currentPrice.toLocaleString("ru-RU")} ₽
📉 Обычно: ${deal.referencePrice.toLocaleString("ru-RU")} ₽
🎯 Выгода: ${deal.discountPercent}%

${deal.rating ? `⭐ ${deal.rating}` : ""}
${deal.reviewsCount ? `💬 Отзывов: ${deal.reviewsCount}` : ""}

🛒 ${marketplaceName}
${deal.url}
`.trim();
}