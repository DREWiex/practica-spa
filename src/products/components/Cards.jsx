import { Link } from 'react-router-dom';

export const Cards = (product) => {

  const {
    id,
    title,
    description,
    photo,
    price,
    rating,
    category
  } = product;


  return (

    // si la url es /{category}, pinta esta card

    <article id={id}>
      <h3> {title} </h3>
      <div>
        <img src={photo} alt={title} title={title} />
      </div>
      <p> Precio: {price.toLocaleString('de-DE')} € </p>
      <button
        data-category={category}
      ><Link to={`/product/${id}`}> Más info </Link></button>
    </article>

    // si la url es product/{id}, pinta esta card


  );

};
