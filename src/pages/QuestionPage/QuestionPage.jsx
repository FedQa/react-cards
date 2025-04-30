import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button/Button";
import className from "./QuestionPage.module.css";
import { useEffect, useId, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { Loader } from "../../components/Loader";

export const QuestionPage = () => {
  const navigate = useNavigate();
  const checkBoxId = useId();
  const [isChecked, setIsChecked] = useState(false);
  const [item, setItem] = useState({});
  const cardId = useParams();

  useEffect(() => {
    fetchData();
  }, []);



  const {
    fetchData,
    data: card,
    isLoading,
    error,
  } = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${cardId.id}`);
    const data = await response.json();
    setItem(data);
    return data;
  });

  useEffect(() => {
    console.log("card")
    card && setIsChecked(card.completed);
  }, [card]);

  const {
    fetchData: updateCard,
    isUpdating,
  } = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${cardId.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: isChecked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setItem(data);
    console.log(data);
  });

  const checkboxHandler = async() => {
    setIsChecked(!isChecked);
    updateCard();
    console.log(isChecked);
  }

  return (
    <div className={className.container}>
      {card && (
        <div className={className.card}>
          <div className={className.cardLabels}>
            <div className={className.badges}>
              <Badge>Level: {card.level}</Badge>
              <Badge className={`${card.completed ? "success" : "alert"}`}>
                {card.completed ? "Completed" : "Not compeleted"}
              </Badge>
            </div>
            {card?.editDate && <span>Edited: {card.editDate}</span>}
          </div>

          <h5 className={className.title}>{card.question}</h5>

          <div className={className.answerWrapper}>
            <p className={className.description}>{card.description}</p>

            <div className={className.short}>
              <span>short answer: </span>
              <p className={className.answer} id="answer">
                {card.answer}
              </p>
            </div>
          </div>

          <div className={className.resources}>
            <div>resources:</div>
            {card.resources.map((resource, index) => {
              return (
                <a key={index} href={resource} target="_blank" rel="noreferrer">
                  {resource}
                </a>
              );
            })}
          </div>

          <div className={className.checkboxContainer}>
            <input
              type="checkbox"
              id={checkBoxId}
              className={className.checkbox}
              checked={isChecked}
              onChange={checkboxHandler}
              name="markCheck"
              disabled={isUpdating}
            />

            <label htmlFor={checkBoxId}>mark as checked</label>
          </div>

          <div className={className.buttonsContainer}>
            <Button name="Edit question" isDisabled={isUpdating} />

            <Button name="Back" onClick={() => navigate("/")} isDisabled={isUpdating} />
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
