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
  const [activePage, setActivePage] = useState(1);
  const [input, setInput] = useState("");
  const [sortSelect, setSortSelect] = useState("");
  const [pagesCountSelect, setPagesCountSelect] = useState(10);
  const mainRef = useRef();
  const [pagesLength, setPagesLength] = useState(0);
  const inputId = useId();

  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${pagesCountSelect}`);

  const {fetchData, data: cards, isLoading, error} = useFetch(async (url) => {
    console.log("fetch")
    const response = await fetch(`${API_URL}/${url}`);
    return await response.json();
  });

  useEffect(() => {
    console.log("effect 1")
    fetchData(`react${searchParams}`);
  }, [searchParams]);

  useEffect(() => {
    if (cards && cards.pages) {
    setPagesLength(cards.pages);
    }
  }, [cards]);

  const inputHandlerChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    const value = e.target.value;
    setSortSelect(value);
    setSearchParams(`?_page=1&_per_page=${pagesCountSelect}&${value}`);
    console.log(sortSelect);
  };

  const onPagesCountSelectChangeHandler = (e) => {
    const value = e.target.value;
    setPagesCountSelect(value);
    setSearchParams(`?_page=1&_per_page=${value}&${sortSelect}`);
    console.log(value);
  };

  const onClickPage = (index) => {
    setActivePage(index);
    setSearchParams(`?_page=${index}&_per_page=${pagesCountSelect}&${sortSelect}`);
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getFilteredCards = () => {
    if (!cards) return [];

    if (!input.trim()) return cards.data;
    return cards.data.filter((card) => card.question.toLowerCase().includes(input.trim().toLocaleLowerCase()))
  };

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
          optionValues={[
            {
              name: "-- sort by --",
            },
            {
              value: "_sort=level",
              name: "level asc",
            },
            {
              value: "_sort=-level",
              name: "level desc",
            },
            {
              value: "_sort=completed",
              name: "completed",
            },
            {
              value: "_sort=-completed",
              name: "not completed",
            },
          ]}
        />

        <Select
          id="pagesCount-select"
          name="pagesCount"
          onChange={onPagesCountSelectChangeHandler}
          optionValues={[
            {
              name: "-- cards per page --",
            },
            {
              name: "5",
              value: 5,
            },
            {
              name: "10",
              value: 10,
            },
            {
              name: "20",
              value: 20,
            },

            {
              name: "40",
              value: 40,
            },
          ]}
        />
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredCards.length > 0 ? <CardList cards={filteredCards} /> : <p className={className.noCardsText}>No cards...</p>}

      <div className={className.pagination}>
        {filteredCards.length > 0 && <Pagination pages={pagesLength} onClickPage={onClickPage} activePage={activePage} />}
      </div>
    </div>
  );
};
