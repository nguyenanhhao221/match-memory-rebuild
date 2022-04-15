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
export const setBoard = contents => {
    return {
        type: 'board/setBoard',
        //payload is an array which contain an random shuffle contents words
        payload: contents
    }
};

//Reducer
export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'board/setBoard':
            let newState = [...state];
            //for each word in the random words array, we set the "contents" key of the newState array equal to that word
            action.payload.forEach((content,index) => {
                newState[index].contents = content
            })
           return newState;
        default:
            return state;
    }
};

//Selectors
export const selectBoard = state => state.board;
export const selectContents = state =>  state.board.map(item => item.contents);