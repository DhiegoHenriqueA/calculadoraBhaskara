const delta = (a, b, c) => {
    return ((Math.pow(b, 2)) - (4*a*c))
}

const bhaskara = (a, b, c, delta) => {
    let x1 = (((-b) - (Math.sqrt(delta))) / (2*a));

    let x2 = (((-b) + (Math.sqrt(delta))) / (2*a));
    return {x1:x1, x2:x2}
}

export {delta, bhaskara}