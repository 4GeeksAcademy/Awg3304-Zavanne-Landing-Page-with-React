import React from 'react';



const Cards = ({ image, title, text }) => {
  return (
    <div className="card" style={{ maxWidth: '16rem', padding: '0' }}>
      <img src={image} className="card-img-top" alt="Card Image" />
      <div className="card-body d-flex flex-column" style={{ padding: '2rem' }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-justify">{text}</p>
      </div>
      <div
        className="mt-auto bg-light border-top pt-3 text-center"
        style={{ padding: '1rem 0' }}
      >
        <a href="#" className="btn btn-dark">
          Find Out More
        </a>
      </div>
    </div>
  );
};
export default Cards;