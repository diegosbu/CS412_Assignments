/* fun1 - takes string and decorator function fun2,
  passes string to fun2 */
const fun1 = (str, fun2) => fun2(str)

/* expression 1 */
const expr1 = fun1('supercalifragilisticexpialidocious',
    (str) => {
        //Splits string at each letter 'c'
        return str.replaceAll('c', '*c').split('*')
    })

/* expression 2 */
const expr2 = fun1('supercalifragilisticexpialidocious',
    (str) => {
        return {
            originalString: str,
            modifiedString: str.replaceAll('a', 'A'),
            numberReplaced: str.match(/a/g).length,
            length: str.length
        }
    })

console.log(expr1);
console.table(expr2);