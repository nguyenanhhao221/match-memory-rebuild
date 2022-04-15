import React from "react";
//import selectBoard and useSelector to get the board state
import { selectBoard } from "./boardSlice";
import { useSelector } from "react-redux";
import { CardRow } from "./cardRow/CardRow";
export function Board() {
    //get the current board's state
    const currentBoard = useSelector(selectBoard);

    //Determine how many rows are there base on total cards and 3 columns.
    const numberOfCards = currentBoard.length;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    //Determine which row contain which card
    let cardBoardSplitColumns = [];
    for (let i = 0; i < currentBoard.length; i += columns) {
        cardBoardSplitColumns.push(currentBoard.slice(i, i + columns));
    };

    let content = [];
    for (let row = 0; row < rows; row++) {
        let rowCards = cardBoardSplitColumns[row];
        content.push(
            <CardRow
                cards={rowCards}
                key={row} />
        )
    }
    //style to adjust the columns of the board
    const style = {
        gridTemplateColumns: `repeat(${columns}, 138px)`
    }
    return (
        <div
            className="cards-container"
            style={style}>
            {content}
        </div>
    )
};