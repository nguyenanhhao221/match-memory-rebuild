import React from "react";
import { Card } from "./card/Card";
export const CardRow = ({ cards }) => {
    return (
        // left empty tag <> because this will arrange by grid template in css
        <>
            {cards.map(card => {
                return (
                    <Card
                        key={card.id}
                        card={card}
                        content={card.contents}
                        id={card.id}
                    />
                )
            })}
        </>
    )
}