//PROBLEM 3

const stringNFunc = (string, func) => func(string);

//FIRST EXPRESSION
stringNFunc('supercalifragilisticexpialidocious',
    string => {
        return string.split(/(?=c)/)
    }
)

//SECOND EXPRESSION
console.log(stringNFunc('supercalifragilisticexpialidocious',
    string => {
        let original = string;
        let modified = string.replace(/a/gi, 'A');
        let numReplaced = string.split('a').length - 1;
        let length = modified.length;
        return {
            originalString: original,
            modifiedString: modified,
            numberReplaced: numReplaced,
            length: length,
        };
    }
))

module.exports = {stringNFunc};