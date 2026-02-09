export type ProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const mockProducts: ProductProps[] = [
  {
    id: 1,
    title: "iPhone 15",
    price: 39900,
    image: "/pictureMock.png",
  },
  {
    id: 2,
    title: "MacBook Pro",
    price: 69900,
    image: "/pictureMock.png",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: 8900,
    image: "/pictureMock.png",
  },
];