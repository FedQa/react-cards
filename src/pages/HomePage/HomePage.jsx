import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import className from "./HomePage.module.css";
import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";

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
      <Loader />
      <CardList cards={cards} />
    </div>
  );
};
