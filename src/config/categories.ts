export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [];
export type CategoryGroup =
  | "home"
  | "beauty"
  | "fashion"
  | "shoes"
  | "electronics"
  | "furniture"
  | "appliances"
  | "auto"
  | "jewelry"
  | "books"
  | "stationery"
  | "accessories";

export type TrackingCategory = {
  group: CategoryGroup;
  name: string;
  priority: 1 | 2 | 3;
};

export const trackingCategories: TrackingCategory[] = [
  { group: "home", name: "Товары для дома", priority: 1 },
  { group: "home", name: "Посуда", priority: 2 },
  { group: "home", name: "Текстиль", priority: 2 },
  { group: "home", name: "Хранение и организация", priority: 2 },

  { group: "beauty", name: "Косметика", priority: 1 },
  { group: "beauty", name: "Уход за лицом", priority: 1 },
  { group: "beauty", name: "Уход за волосами", priority: 1 },
  { group: "beauty", name: "Парфюмерия", priority: 2 },

  { group: "fashion", name: "Женская одежда", priority: 1 },
  { group: "fashion", name: "Мужская одежда", priority: 2 },
  { group: "fashion", name: "Детская одежда", priority: 1 },

  { group: "shoes", name: "Женская обувь", priority: 1 },
  { group: "shoes", name: "Мужская обувь", priority: 2 },
  { group: "shoes", name: "Детская обувь", priority: 1 },

  { group: "electronics", name: "Электроника", priority: 1 },
  { group: "electronics", name: "Смартфоны", priority: 1 },
  { group: "electronics", name: "Наушники", priority: 1 },
  { group: "electronics", name: "Ноутбуки", priority: 2 },

  { group: "furniture", name: "Мебель", priority: 2 },

  { group: "appliances", name: "Бытовая техника", priority: 1 },
  { group: "appliances", name: "Техника для кухни", priority: 1 },
  { group: "appliances", name: "Пылесосы", priority: 1 },

  { group: "auto", name: "Автотовары", priority: 3 },

  { group: "jewelry", name: "Украшения", priority: 2 },
  { group: "jewelry", name: "Ювелирные изделия", priority: 2 },

  { group: "books", name: "Книги", priority: 3 },
  { group: "stationery", name: "Канцтовары", priority: 3 },

  { group: "accessories", name: "Аксессуары", priority: 2 },
  { group: "accessories", name: "Сумки", priority: 1 },
  { group: "accessories", name: "Рюкзаки", priority: 2 }
]; 