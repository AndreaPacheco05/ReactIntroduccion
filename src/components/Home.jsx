import React, { useEffect, useState } from 'react';
import Header from './Header';
import { pizzas } from "../pizzas"
import CardPizza from './CardPizza';
import './Home.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]); 
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
            <CardPizza {...pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;