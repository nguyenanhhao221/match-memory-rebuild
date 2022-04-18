const initialState = [
    { id: 0, contents: 'Provider', visible: true, matched: true },
    { id: 1, contents: 'Provider', visible: true, matched: true },
    { id: 2, contents: 'selector', visible: true, matched: true },
    { id: 3, contents: 'selector', visible: true, matched: true },
    { id: 4, contents: 'useSelector()', visible: true, matched: true },
    { id: 5, contents: 'useSelector()', visible: true, matched: true },
    { id: 6, contents: 'useDispatch()', visible: true, matched: true },
    { id: 7, contents: 'useDispatch()', visible: true, matched: true },
    { id: 8, contents: 'Pure Function', visible: true, matched: true },
    { id: 9, contents: 'Pure Function', visible: true, matched: true },
    { id: 10, contents: 'react-redux', visible: true, matched: true },
    { id: 11, contents: 'react-redux', visible: true, matched: true },
];
//Action creators
//setBoard will takes in an array contain a shuffled words for "contents" property
export const setBoard = contents => {
    return {
        type: 'board/setBoard',
        //payload is an array which contain an random shuffle contents words
        payload: contents
    }
};


//flipCard will changes the card visible to true
export const flipCard = id => {
    return {
        type: 'board/flipCard',
        payload: id
    }
}
//Reducer
export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'board/setBoard':
            let newState = [...state];
            //for each word in the random words array, we set the "contents" key of the newState array equal to that word
            action.payload.forEach((content, index) => {
                newState[index].contents = content;
                newState[index].visible = false;
                newState[index].matched = false;
            })
            return newState;
        case 'board/flipCard':
            let flipState = [...state];
            let cardID = action.payload;

            let cardBeingFlip = flipState.filter(card => card.id === cardID);
            //set the visible to true
            cardBeingFlip[0].visible = true;
            //replace the cardBeingFlip with visible as true back to the current flipState array
            flipState = flipState.map(card => card.id !== cardBeingFlip[0].id ? card : cardBeingFlip[0]);
            //filter out the card that have visible true and match is false
            //that means they are being flipped and need to check of match or not
            //we will only check if these condition filter out at least 2 cards and then the contents of these 2 cards matched each other
            // if yes, update the match property to true and replace these 2 cards back in the the flipState using their id with match property updated
            let checkMatchedCards = flipState.filter(card => !card.matched && card.visible);
            if (checkMatchedCards.length >= 2 && checkMatchedCards[0].contents === checkMatchedCards[1].contents) {
                //update each card matched property to true if contents match
                checkMatchedCards.forEach(card => card.matched = true);
                //then replace these newly updated card back in to the flipState using their id
                checkMatchedCards.forEach(cardToCheck => flipState.map(cardFlip => cardFlip.id !== cardToCheck.id ? cardFlip : cardToCheck))
            }
            return flipState;

        default:
            return state;
    }
};

//Selectors
export const selectBoard = state => state.board;
export const selectContents = state => state.board.map(item => item.contents);
//select an array contains which card id is visible is true
export const selectVisibleID = state => state.board
    .filter(card => card.visible)
    .map(visibleCard => visibleCard.id);
//select an array contains which card id and match is true
export const selectMatchIDs = state => state.board
    .filter(card => card.matched)
    .map(matchCard => matchCard.id);