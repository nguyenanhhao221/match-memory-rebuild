import React from "react";
import { flipCard } from "../../boardSlice";
import { useDispatch } from "react-redux";
const logoLink = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ content, card, id }) => {
    const dispatch = useDispatch();
    //if visible is false, we will set the cardText as a codecademy image logo
    let cardText = <img src={logoLink} className="logo-placeholder" alt="Card option"></img>

    //if the visible property is true, then show the content of the card
    if (card.visible) {
        cardText=content;
    }
    //set normal style to make the className into card resting. If later it matched or not matched after flip, we can re assign cardStyle value to adjust the css style
    //onClickHandler will flip the card
    const onClickHandler = id => {
        dispatch(flipCard(id))
    }
    const cardStyle = 'resting';
        return (
            <button 
                className={`card ${cardStyle}`}
                onClick={() =>  onClickHandler(id)}
                >
                {cardText}
            </button>
        )
}