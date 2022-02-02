//Helper func - turns string into array
const strtoArr = (word) => word.split('')

const revAlph = (word) => {
    wArr = strtoArr(word)
    return wArr.sort().reverse()
}

console.log(revAlph('supercalifragilisticexpialidocious'))