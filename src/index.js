module.exports = function toReadable(number) {
    if (number >= 0 && number <= 19) return toReadable_1_19(number);
    if (number >= 20 && number <= 99) return toReadable_20_99(number);
    if (number >= 99 && number <= 999) {
        let hundred = Math.trunc(number / 100);
        let dozen = number % 100;
        if (dozen === 0) return toReadable_1_19(hundred) + ' hundred';
        let str ='';
        if (dozen >= 0 && dozen <= 19) str = toReadable_1_19(dozen);
        if (dozen >= 20 && dozen <= 99) str = toReadable_20_99(dozen);
        return toReadable_1_19(hundred) + ' hundred ' + str;
    }
    return 'end';
}

function toReadable_20_99(number) {
    let dozen = Math.trunc(number / 10) * 10;
    let num = number % 10;
    if (num === 0) {
        return toReadableDozens(dozen);
    } else {
        return toReadableDozens(dozen) + ' ' + toReadable_1_19(num);
    }
}

function toReadable_1_19(num) {
    switch (num) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function toReadableDozens(num) {
    switch (num) {
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
    }
}
