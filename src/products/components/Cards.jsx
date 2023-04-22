import { Link } from 'react-router-dom';

export const Cards = (product) => {

    const {
        id,
        title,
        photo,
        price
    } = product;

  return (

    <article id={id}>
        <h3> {title} </h3>
        <div>
            <img src={photo} alt={title} title={title} />
        </div>
        <p> Precio: {price.toLocaleString('de-DE')} € </p>
        <button><Link to={`/product/${id}`}> Más info </Link></button>
    </article>

  );

};
