import { useEffect, useState } from "react";
import className from "./HomePage.module.css";
import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";

export const HomePage = () => {
  const [cards, setCards] = useState([]);

  const [getCards, isLoading, error] = useFetch(async(url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const cards = await response.json();
    setCards(cards);
  });

  useEffect(() => {
    getCards("react");
  }, []);

  return (
    <div className={className.main}>
      HomePage
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <CardList cards={cards} />
    </div>
  );
};
