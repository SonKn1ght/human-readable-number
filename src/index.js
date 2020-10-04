const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const hundred = 'hundred';
const zero = 'zero';

const extractСharacter = (object, positionEnd) => {
    let arrayOfobject = object
        .split('')
    if (arrayOfobject[positionEnd-1] === '') {
        return ''
    }
    return arrayOfobject[positionEnd-1];
};

module.exports = function toReadable (num) {
    let humanNumber = ``;
    let number = num.toString();
    if (number == 0) {
        return zero;
    }
    if (0 < number && number <= 19) {
        return numbers[number];
    }
    if (19 < number && number < 100) {
        if (number.slice(1) === `0`) {
            return tens[extractСharacter(number, 1)];
        }
        return `${tens[extractСharacter(number, 1)]} ${numbers[extractСharacter(number, 2)]}`
    }

    if (99 < number && number <= 999) {
        humanNumber = `${numbers[extractСharacter(number, 1)]} ${hundred}`;
        if (number.slice(1) === `00`) {
            return humanNumber;
        }

        if (number.slice(1) < 20) {
            if (number.slice(1) > 9) {
                return humanNumber += ' ' + numbers[number.slice(1)];
            }

            if (number.slice(1, 2) === `0`) {
                return humanNumber += ` ${numbers[number.slice(2, 3)]}`
            }

            return humanNumber += ` ${numbers[number.slice(1)]}`;
        }

        if (number.slice(2) === `0`) {
            return humanNumber += ' ' + tens[extractСharacter(number.slice(1), 1)];
        }
        return humanNumber += ` ${tens[extractСharacter(number.slice(1), 1)]} ${numbers[extractСharacter(number.slice(1), 2)]}`;
    }
}

