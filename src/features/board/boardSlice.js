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
            action.payload.forEach((content,index) => {
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
           return flipState = flipState.map(card => card.id !== cardBeingFlip[0].id ? card : cardBeingFlip[0]);
        default:
            return state;
    }
};

//Selectors
export const selectBoard = state => state.board;
export const selectContents = state =>  state.board.map(item => item.contents);