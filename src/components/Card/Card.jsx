import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import className from "./Card.module.css";
import { Badge } from "../Badge";

export const Card = ({ card }) => {
  const navigate = useNavigate();

  const getStatus = () => {
    if (card.level === 1) {
      return "success";
    }
    if (card.level === 2) {
      return "warning";
    }
    if (card.level === 3) {
      return "alert";
    }
    if (!card.completed) {
      return "primary";
    }
    return "primary";
  };

  return (
    <div className={className.card}>
      <div className={className.badges}>
        <Badge 
        className={`${getStatus()}`}
        >
          Level: {card.level}
        </Badge>
        <Badge className={`${card.completed ? "success" : "alert" || "primary"}`}>
          {card.completed ? "Completed" : "Not compeleted"}
        </Badge>
      </div>

      <h5 className={className.title}>{card.question}</h5>

      <div className={className.answerWrapper}>
        <span>short answer: </span>
        <p className={className.answer} id="answer">
          {card.answer}
        </p>
      </div>

      <Button onClick={() => navigate(`/question/${card.id}`)} name="View" />
    </div>
  );
};