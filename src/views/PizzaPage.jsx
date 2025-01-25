import { useEffect, useState } from "react";
import '../assets/css/Pizza.css';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);
  const URL = "http://localhost:5000/api/pizzas/p001";

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching pizza:", err);
      }
    };

    fetchPizza();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pizza) {
    return <p>Loading...</p>;
  }

  return (
    <div className="box">
      {pizza.img && <img src={pizza.img} alt={pizza.name} />}
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients?.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Precio: ${pizza.price.toLocaleString('es-CL')}</h3>
      <button>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
