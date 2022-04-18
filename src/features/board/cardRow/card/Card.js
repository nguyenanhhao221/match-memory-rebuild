import React from "react";
import { flipCard, flipCardNotMatch, selectVisibleID, selectMatchIDs, selectNotMatchIDs } from "../../boardSlice";
import { useDispatch, useSelector } from "react-redux";
const cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ content, card, id }) => {
    const dispatch = useDispatch();
    //if visible is false, we will set the cardText as a codecademy image logo
    let cardText = <img src={cardLogo} className="logo-placeholder" alt="Card option"></img>

    //set normal style to make the className into card resting. If later it matched or not matched after flip, we can re assign cardStyle value to adjust the css style
    //click will fire different action depends on visible card
    let click = () => {
        flipHandler(id);
    }
    //flipHandler will run the flipCard 
    let flipHandler = id => {
        dispatch(flipCard(id))
    }
    //flipNotMatch will run when click on the third card and the previous 2 is not matched.
    let flipNotMatch = id => {
        dispatch(flipCardNotMatch(id))
    }

    //visibleSelector and matchIds selector
    let visibleIDs = useSelector(selectVisibleID);
    let matchIDs = useSelector(selectMatchIDs);
    let notMatchIDs = useSelector(selectNotMatchIDs);
    //if the id of the card exist in the visible id selector, display the content
    if (visibleIDs.includes(id) || matchIDs.includes(id)) {
        cardText = content;
        click = () => { };
    }
    //if visibleIDs array contains more than 2 card, then when click new card will run the flipNotMatch handler which run the flipCardNotMatch action
    //this action will flip the third card and close the 2 previous cards, if the 2 previous cards is not matched
    if (visibleIDs.length === 2) {
        // click = () => { };
        click = () => {flipNotMatch(id)};
    }
    //cardStyle will change depends on the match property 
    let cardStyle = 'resting';
    //if the match selector contain the card id, this card will have "matched" style
    if (matchIDs.includes(id)) {
        cardStyle = 'matched';
    };
    //if the no match ids contains more than 2 and the card is in that array
    if (notMatchIDs.length === 2 && notMatchIDs.includes(id)) {
        cardStyle = 'no-match';
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