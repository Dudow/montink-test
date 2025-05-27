export interface Product {
  currency: string;
  id: string;
  image_url: string;
  images: {
    id: number;
    source: string;
  }[];
  options: string[];
  values: string[][];
  variants: variantProduct[];
  title: string;
}

export interface variantProduct {
  id: number;
  price: string;
  values: string[];
  inventory_quantity: number;
  image_url: string;
}
