import React from "react";
import { Board } from "../features/board/Board";
import { Score } from "../features/score/Score";
import { setBoard, selectContents, selectBoard } from "../features/board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import { shuffleContents } from "../utilities/helper";


const App = () => {
    //set up dispatch with react-redux
    const dispatch = useDispatch();
    //select the content from the state array and create a new array
    const currentBoard = useSelector(selectBoard)
    const randomContents = shuffleContents(currentBoard.map(card => card.contents));
    //onClick handler for the start game button
    const onClickHandler = () => {
        dispatch(setBoard(randomContents));
    }
    return (
        <div className="App">
            <Score random={randomContents} />
            <Board board={currentBoard.map(card => card.contents)} />
            <footer className="footer">
                <button
                    className="start-button"
                    onClick={() => onClickHandler()}>
                    Start Game
                </button>
                <button className="try-new-pair-button">
                    Try New Pair
                </button>
            </footer>
        </div>
    );
};

export default App;