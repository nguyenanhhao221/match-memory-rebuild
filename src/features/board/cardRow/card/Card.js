import React from "react";
import { flipCard, selectVisibleID } from "../../boardSlice";
import { useDispatch, useSelector } from "react-redux";
const cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ content, card, id }) => {
    const dispatch = useDispatch();
    //if visible is false, we will set the cardText as a codecademy image logo
    let cardText = <img src={cardLogo} className="logo-placeholder" alt="Card option"></img>

    //if the visible property is true, then show the content of the card
    if (card.visible) {
        cardText = content;
    }
    //set normal style to make the className into card resting. If later it matched or not matched after flip, we can re assign cardStyle value to adjust the css style
    //click will fire different action depends on visible card
    let click = () => {
        flipHandler(id);
    }
    //flipHandler will run the flipCard 
    let flipHandler = id => {
        dispatch(flipCard(id))
    }
    const cardStyle = 'resting';

    //visibleSelector
    //if visibleIDs array contains more than 2 card, then when click new card will not flip
    let visibleIDs = useSelector(selectVisibleID);
    if (visibleIDs.length >= 2) {
        click = () => { };
    }
    return (
        <button
            className={`card ${cardStyle}`}
            onClick={click}
        >
            {cardText}
        </button>
    )
}