export interface Product {
  id: string;
  title: string;
  price: string;
  sizes: string[];
  colors: {
    hex: string;
    images: string[];
  }[];
}
