export const checkFirstLastName = (value) => {
    let patt = /[A-Za-z]{3,25}$/;

    if (!patt.test(value.replace(/\s/g, ''))) {
        return false;
    } else {
        return true;
    }
}

export const checkEmail = (value) => {
    let patt = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9.]+)\.([a-zA-Z]{2,6})$/;

    if(!patt.test(value.trim())){
        return false;
    } else {
        return true;
    }
}
export const checkText = (value) => {
    let patt = /^.{5,150}$/;

    if (!patt.test(value.replace(/\s/g, ''))) {
        return false;
    } else {
        return true;
    }
}