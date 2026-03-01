export type EconverseProduct = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type EconverseProductsResponse = {
  success: boolean;
  products: EconverseProduct[];
};
