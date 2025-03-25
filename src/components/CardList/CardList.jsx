import { memo } from 'react'
import { Card } from '../Card/Card'
import className from './CardList.module.css'

export const CardList = memo(({cards}) => {
    return (
        <div className={className.wrapper}>
            <h1>CardList</h1>

            <div className={className.cardList}>
            {cards.map((card) => {
                return (
                    <Card 
                    card={card} 
                    className={className.card} 
                    key={card.id} 
                    />
                )
            })}
            </div>
        </div>
    )
});