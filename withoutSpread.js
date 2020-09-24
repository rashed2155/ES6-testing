"use strict";

let poorCountry = ['bangladesh', 'srilanka'];
let richCountry = [...poorCountry,'china', 'canada', 'america'];

richCountry.push(poorCountry);

console.log(richCountry);