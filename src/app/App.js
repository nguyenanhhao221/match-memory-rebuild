import React from "react";
import { Board } from "../features/board/Board";
import { Score } from "../features/score/Score";
const App = () => {
    return (
        <div className="App">
            <Score />
            <Board />
            <footer className="footer">
                <button className="start-button">
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