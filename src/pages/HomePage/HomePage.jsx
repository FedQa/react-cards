import { useEffect, useId, useState } from "react";
import className from "./HomePage.module.css";
import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { Input } from "../../components/Input";
import { SearchIcon } from "../../components/Icons";
import { Select } from "../../components/Select";

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const inputId = useId();

  const [getCards, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const cards = await response.json();
    setCards(cards);
  });

  useEffect(() => {
    getCards(`react?${sortSelect}`);
  }, [sortSelect]);

  const inputHandlerChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    const value = e.target.value;

    setSortSelect(value);
    console.log(sortSelect);
  }

  const filteredCards = cards.filter((card) => card.question
  .toLowerCase()
  .includes(input.trim().toLowerCase()));

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
        <Select 
          id="sort-select"
          name="sortSelect"
          onChange={onSortSelectChangeHandler}
          //TODO: opt group разделить на две группы level / complete
          optionValues={[
            {
              name: "sort by",
            },
            {
              value: "_sort=level",
              name:"level asc"
            }, 
            {
              value: "_sort=-level",
              name: "level desc",
            },
            {
              value: "_sort=completed",
              name: "completed"
            },
            {
              value: "_sort=-completed",
              name: "not completed"
            }
            ]}
          />
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredCards.length > 0 ? 
      <CardList cards={filteredCards} /> 
      : 
      <p className={className.noCardsText}>No cards...</p>}
    </div>
  );
};
