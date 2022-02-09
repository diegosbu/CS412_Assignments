//revAlph - sorts string in reverse alphabetical order
const revAlph = (word) => {
    return word.split('').sort().reverse().join('');
}

console.log(revAlph('supercalifragilisticexpialidocious'));