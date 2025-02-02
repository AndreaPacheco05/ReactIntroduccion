import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import { useCart } from "../context/CartContext";
import '../assets/css/Home.css';

const HomePage = () => {
  const [pizzas, setPizzas] = useState([]); 
  const { addToCart } = useCart();
  const URL = "http://localhost:5000/api/pizzas"; 

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data); 
    setPizzas(data);
  };

  return ( 
    <div className="home">
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <CardPizza {...pizza} addToCart={() => addToCart(pizza)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;     