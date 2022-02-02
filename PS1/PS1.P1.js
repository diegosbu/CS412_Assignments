//Helper func - turns string into array
const strtoArr = (word) => word.split('')

//revAlph - sorts string in reverse alphabetical order
const revAlph = (word) => {
    wArr = strtoArr(word);
    return wArr.sort().reverse().join('');
}

console.log(revAlph('supercalifragilisticexpialidocious'));