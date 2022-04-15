// Fisher-yates random shuffle (Knuth shuffle) an array algo
export const shuffleContents = contents => {
    let copyArr = [...contents];
    let currentIndex = copyArr.length, randomIndex;
    //when there are remaining items to pick
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    }

    //swap the current item with the random item 
    [copyArr[currentIndex], copyArr[randomIndex]] = [copyArr[randomIndex], copyArr[currentIndex]];
    return copyArr;
}

