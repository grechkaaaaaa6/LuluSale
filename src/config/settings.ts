export type Settings = {
  dbPath: string;
  logLevel?: "debug" | "info" | "warn" | "error";
};

export const settings: Settings = {
  dbPath: "./data/sqlite.db",
  logLevel: "info",
};
export const SETTINGS = {
  MIN_DISCOUNT_PERCENT: 15,
  STRONG_DISCOUNT_PERCENT: 25,
  ANOMALY_DISCOUNT_PERCENT: 40,

  MIN_REVIEWS: 20,
  MIN_RATING: 4.0,

  HISTORY_DAYS: 30
}; 