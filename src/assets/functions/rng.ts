export function rng() {
    return Math.floor(Math.random() * 100);
}

export function temper_rng() {
    const randomNumber = (Math.random() * 100).toFixed(1);
    return parseFloat(randomNumber);
}