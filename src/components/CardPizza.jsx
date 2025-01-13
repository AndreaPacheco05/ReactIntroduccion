import React from 'react';
import './CardPizza.css';

const CardPizza = ({ img, name, desc, ingredients, price }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", width: "300px" }}>
      <img src={img} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${price}</p>
    </div>
  );
};

// const CardPizza = ({ name, price, ingredients, img }) => {
//   return (
//     <div className="card" style={{ width: '18rem' }}>
//       <img src={img} className="card-img-top" alt={name} />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <hr />
//         <h6>Ingredientes:</h6>
//         <p>🍕{ingredients.map((ing, idx) => `${ing}${idx !== ingredients.length - 1 ? ', ' : ''}`)}</p>
//         <hr />
//         <h2>Precio: ${price.toLocaleString('en-US')}</h2>
//         <button className="btn">Ver más 👀</button>
//         <button className="btn btn-dark">Añadir 🛒</button>
//       </div>
//     </div>
//   );
// };

export default CardPizza;