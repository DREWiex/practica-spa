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

      {/* PRODUCTS PAGE CARDS */}

      {
        pathname == `/${category}` &&

        <article id={id}>
          <h3 className='text-center'> {title} </h3>
          <div>
            <img src={photo} alt={title} title={title} />
          </div>
          <p> <strong>Price:</strong> {price} € </p>
          <button data-category={category}>
            <Link to={`/product/${id}`}> More info </Link>
          </button>
        </article>
      }

      {/* PDP CARD */}

      {
        pathname == `/product/${id}` &&

        <article id={id}>
          <button>
            <Link to={`/${category}`}> Back </Link>
          </button>
          <div>
            <img src={photo} alt={title} title={title} />
          </div>
          <h3> {title} </h3>
          <p> {description} </p>
          <p> <strong>Price:</strong> {price} € </p>
          <p> Rating: {rating} </p>
        </article>
      }

      {/* BROWSER CARDS */}

      {
        pathname == `/browser` &&

        <article id={id}>
          <h3 className='text-center'> {title} </h3>
          <div>
            <img src={photo} alt={title} title={title} />
          </div>
          <p> <strong>Price:</strong> {price} € </p>
        </article>
      }

    </>

  );

};