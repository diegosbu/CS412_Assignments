/* fun1 - takes string and decorator function fun2,
  passes string to fun2 */
const fun1 = (str, fun2) => fun2(str)

/* helper function - counts occurrences of 'letter' in given string */
let strOccur = (str, letter) => {
    let ctr = 0;

    //increase counter if matching letter
    for (let i of str) {
        if (i == letter) {
            ctr += 1;
        }
    }

    return ctr;
}

/* expression 1 */
const expr1 = fun1('supercalifragilisticexpialidocious',
    (str) => {
        //Splits string at each letter 'c'
        strArr = str.split('c');

        //prepends 'c' to each following string
        for (i in strArr) {
            if (i > 0) {
                strArr[i] = 'c' + strArr[i];
            }
        }

        return strArr;
    })

/* expression 2 */
const expr2 = fun1('supercalifragilisticexpialidocious',
    (str) => {
        //replace all occurrences of 'a' with 'A'
        str2 = str.replaceAll('a', 'A');

        //create properties object
        let props = new Object();
        props.originalString = str;
        props.modifiedString = str2;
        props.numberReplaced = strOccur(str2, 'A');
        props.length = str2.length;

        return props;
    })

console.log(expr1);
console.table(expr2);
