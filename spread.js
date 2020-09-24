let poorCountry = ['bangladesh', 'srilanka'];
let richCountry = [...poorCountry,'china', 'canada', 'america'];
let all = [...poorCountry, ...richCountry];

console.log(richCountry);
console.log(all);