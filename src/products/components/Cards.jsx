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

        <section className='flex-pdp'>

          <button className='btn-pdp'>
            <Link to={`/${category}`}> Back </Link>
          </button>

          <article id={id} className=''>
            <div className='div-pdp-pic'>
              <img src={photo} alt={title} title={title} />
            </div>
            <div className='div-pdp-text'>
              <h3> {title} </h3>
              <p> {description} </p>
              <p> <strong>Price:</strong> {price} € </p>
              <p> <strong>Rating:</strong> {rating} </p>
            </div>
          </article>

        </section>
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