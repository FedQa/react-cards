import { useEffect, useId, useState } from "react";
import className from "./HomePage.module.css";
import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { Input } from "../../components/Input";
import { SearchIcon } from "../../components/Icons";

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const inputId = useId();

  const [getCards, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const cards = await response.json();
    setCards(cards);
  });

  useEffect(() => {
    getCards("react");
  }, []);

  const inputHandlerChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className={className.main}>
      <h1>HomePage</h1>
      <div className={className.controls}>
        <div className={className.inputContainer}>
          <label htmlFor={inputId} className={className.searchIcon}>
            <SearchIcon />
          </label>
          <Input
            id={inputId}
            value={input}
            placeholder="Search..."
            onChangeHandler={inputHandlerChange}
            className={className.input}
          />
        </div>
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <CardList cards={cards} />
    </div>
  );
};
