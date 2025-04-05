import { useEffect, useId, useRef, useState } from "react";
import className from "./HomePage.module.css";
import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { Input } from "../../components/Input";
import { SearchIcon } from "../../components/Icons";
import { Select } from "../../components/Select";
import { Pagination } from "../../components/Pagination/Pagination";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState('?_page=1&_per_page=10');
  const [activePage, setActivePage] = useState(1);
  const [cards, setCards] = useState({});
  const [input, setInput] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const mainRef = useRef();
  const [pagesLength, setPagesLength] = useState(0);
  const inputId = useId();

  const [getCards, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const cards = await response.json();
    setCards(cards);
    setPagesLength(cards.pages);
  });

  useEffect(() => {
    getCards(`react${searchParams}`);
  }, [searchParams]);

  const inputHandlerChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    const value = e.target.value;

    setSortSelect(value);
    setSearchParams(`?_page=1&_per_page=10&${value}`);
    console.log(sortSelect);
  }

  const onClickPage = (index) => {
    setActivePage(index);
    setSearchParams(`?_page=${index}&_per_page=10`);
    mainRef.current.scrollIntoView({behavior: "smooth"});
  }

  const getFilteredCards = () => {
    if (!cards.data) return [];

    if (!input.trim()) return cards.data;

    return cards.data ? cards.data.filter(
      card => card.question.toLowerCase()
      .includes(input.trim().toLocaleLowerCase())
    ) : cards.filter(
      card => card.question.toLowerCase()
      .includes(input.trim().toLocaleLowerCase())
    );
  }

  const filteredCards = getFilteredCards();


  return (
    <div className={className.main} ref={mainRef}>
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

      <div className={className.pagination}>
        {filteredCards.length > 0 && 
        <Pagination 
        pages={pagesLength}
        onClickPage={onClickPage}
        activePage={activePage} />
        }
      </div>
    </div>
  );
};
