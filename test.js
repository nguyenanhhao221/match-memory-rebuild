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

const wordsArr = [
    'useSelector()', 'react-redux',
    'react-redux', 'selector',
    'useSelector()', 'useDispatch()',
    'Provider', 'selector',
    'Pure Function', 'useDispatch()',
    'Pure Function', 'Provider'
];
let finalArr = [...initialState];
for(let i = 0; i < wordsArr.length; i++) {
    finalArr[i].contents = wordsArr[i];
}
console.log(finalArr);