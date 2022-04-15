import React from "react";
import { Board } from "../features/board/Board";
const App = () => {
    return (
        <div className="App">
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