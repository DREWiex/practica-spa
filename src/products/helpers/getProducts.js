import { dummyFetch } from '../api/dummyFetch';

export const getProducts = async (url, category) => {

  const response = await dummyFetch(url, category);


  console.log('CATEGORY EN GETPRODUCTS:', category);


  const { products } = response; // destructuro la respuesta para poder iterar con el map() en el else

  if (!category) {

    const product = { // como solo "pintaré" un producto en el componente Cards, devuelvo un único objeto, ya que no necesito iterar
      id: response.id,
      title: response.title,
      description: response.description,
      photo: response.thumbnail,
      price: response.price,
      rating: response.rating,
      category,
    };

    return product;

  } else {

    const product = products.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      photo: item.thumbnail,
      price: item.price,
      rating: item.rating,
      category,
    }));

    return product; // devuelve un array de objetos por cada iteración de la categoría

  };

};