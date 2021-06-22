export interface ISize {
  id: string;
  name: string;
}

export interface IColour {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  sizes: Array<ISize>;
  colours: Array<IColour>;
}

export interface IProductBasketInfo {
  product: IProduct;
  size: ISize;
  colour: IColour;
  count: number;
}
