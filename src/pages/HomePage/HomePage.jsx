import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { API_URL } from "../../constants";
import className from "./HomePage.module.css";

export const HomePage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/react`);
      const cards = await response.json();
      setCards(cards);
    }

    fetchData();
  }, []);

  return (
    <div className={className.main}>
      HomePage
      {cards.map((card, index) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
};
