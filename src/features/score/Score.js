import React from "react";
import { selectMatchIDs } from "../board/boardSlice";
import { useSelector } from "react-redux";
export const Score = () => {
    //select the current ids of the card that matched
    const currentMatchedCards = useSelector(selectMatchIDs);
    //score will base on the length of the array
    let score = currentMatchedCards.length;
    return (
        <div className="score-container">
            {/* replace 0 later with actual score */}
            Matched: {score}
        </div>
    )
}