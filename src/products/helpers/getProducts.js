import { dummyFetch } from '../api/dummyFetch';

export const getProducts = async (category) => {

    const { products } = await dummyFetch(category);

    const product = products.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        photo: item.thumbnail,
        price: item.price,
        rating: item.rating,
        category,
    }));

  return product;

};