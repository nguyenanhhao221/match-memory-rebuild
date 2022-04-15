import React from "react";
import { Board } from "../features/board/Board";
import { Score } from "../features/score/Score";
import { setBoard } from "../features/board/boardSlice";
import { useDispatch } from "react-redux";
const App = () => {
    //set up dispatch with react-redux
    const dispatch = useDispatch();
    //onClick handler for the start game button
    const onClickHandler = () => {
        dispatch(setBoard());
    }
    return (
        <div className="App">
            <Score />
            <Board />
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