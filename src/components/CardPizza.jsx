import React from 'react';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <h6>Ingredientes:</h6>
        <p>🍕{ingredients.map((ing, idx) => `${ing}${idx !== ingredients.length - 1 ? ', ' : ''}`)}</p>
        <hr />
        <h2>Precio: ${price.toLocaleString('en-US')}</h2>
        <button className="btn">Ver más 👀</button>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
