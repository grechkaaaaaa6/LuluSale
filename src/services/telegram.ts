export type TelegramOptions = {
  botToken: string;
  chatId: string;
};

export function buildTelegramMessage(text: string): string {
  return text;
}

export async function sendTelegramMessage(options: TelegramOptions, message: string): Promise<boolean> {
  const url = `https://api.telegram.org/bot${options.botToken}/sendMessage`;
  const payload = {
    chat_id: options.chatId,
    text: message,
    parse_mode: "MarkdownV2",
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
}

export default {
  buildTelegramMessage,
  sendTelegramMessage,
};
