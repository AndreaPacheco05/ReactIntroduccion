import React from 'react';
import { Link } from 'react-router-dom';  
import { useCart } from "../context/CartContext"; 
import '../assets/css/CardPizza.css';

const CardPizza = ({ img, name, desc, ingredients, price, id }) => {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <Link to={`/pizza/${id}`} className="pizza-link">  
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>{desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        { ingredients.map((ingredient) => ( <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <strong>Precio:</strong> ${price.toLocaleString('es-CL')}
      </p>
      <button onClick={() => addToCart({ id, name, price, img })} className="add-button">
        Añadir al carrito
      </button>
    </div>
  );
};

export default CardPizza;
