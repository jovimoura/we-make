import { api } from "./api";

export async function getProducts(product: string) {
  const { data }: { data: any[] } = await api.get(
    `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`
  );

  const products = data
    .reverse()
    .filter((product) => product.price !== 0)
    .filter((product) => product.image_link.endsWith(".jpg"))
    .map((item) => ({
      ...item,
      image: item.image_link,
      title: item.name,
      description: item.description,
      price: parseFloat(item.price),
    }));
  return products;
}
