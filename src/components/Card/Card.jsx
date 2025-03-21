import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import className from './Card.module.css'

export const Card = ({card}) => {
    const navigate = useNavigate();
    const showAnswer = () => {
        const answer = document.getElementById("answer");
        answer.style.filter = "none";
    }

    console.log(card);

    return (
        <div className={className.card}>
            <div className={className.badges}>
                <div className={className.badge}>Level: {card.level}</div>
                <div className={className.badge}>{card.completed ? "Completed" : "Not compeleted"}</div>
            </div>

            <h5 className={className.title}>{card.title}</h5>

            <div className={className.answerWrapper}>
                <span>short answer: </span>
                <p className={className.answer} id="answer">{card.answer}</p>
            </div>

            <Button onClick={() => navigate(`/question/${card.id}`)} name="View" />
        </div>
    )
}