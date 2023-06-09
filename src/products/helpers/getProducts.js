import { dummyFetch } from '../api/dummyFetch';

export const getProducts = async (url) => {

  const response = await dummyFetch(url);

  const { products } = response; // destructuro la respuesta para iterar con el map() en el else

  //! condicional: si no es un array, lo meto dentro de un array; envío el mismo objeto
  //! enviar el objeto en un array y destructurar donde necesito solo uno en su componente (PDP, por ej.)

  if (location.href.includes('product')) { // aplica únicamente para la pdp (product detail page)

    return { // como solo renderizaré un producto en el componente Cards, devuelvo un único objeto, ya que no necesito iterar
      id: response.id,
      title: response.title,
      description: response.description,
      photo: response.thumbnail,
      price: response.price,
      rating: response.rating,
      category: response.category
    };

  } else {

    const product = products.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      photo: item.thumbnail,
      price: item.price,
      rating: item.rating,
      category: item.category
    }));

    return product; // devuelve un array de objetos por cada iteración de la categoría

  };

};