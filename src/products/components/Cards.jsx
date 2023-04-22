import { Link, useLocation } from 'react-router-dom';

export const Cards = (product) => {

  const { pathname } = useLocation();

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

    <>

      {
        pathname == `/${category}` &&

        <article id={id}>
          <h3> {title} </h3>
          <div>
            <img src={photo} alt={title} title={title} />
          </div>
          <p> Price: {price.toLocaleString('de-DE')} € </p>
          <button data-category={category}>
            <Link to={`/product/${id}`}> More info </Link>
          </button>
        </article>
      }

      {
        pathname != `/${category}` &&

        <article id={id}>
          <div>
            <img src={photo} alt={title} title={title} />
          </div>
          <h3> {title} </h3>
          <p> {description} </p>
          <p> Price: {price} € </p>
          <p> Rating: {rating} </p>
        </article>
      }

    </>

  );

};
