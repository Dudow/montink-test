export interface Product {
  currency: string;
  id: number;
  image_url: string;
  images: {
    id: number;
    source: string;
  }[];
  options: string[];
  values: string[][];
  variants: {
    id: number;
    image_url: string;
    inventory_quantity: number;
    price: string;
    values: unknown[];
  }[];
  title: string;
}

export interface variantProduct {
  id: number;
  price: string;
  values: string[];
  inventory_quantity: number;
  image_url: string;
}
