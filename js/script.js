'use strict';

let text = 'aaa@bbb@ccc';
console.log(text.replace(/@/g, '!'));



let txt = 'aaa bbb ccc';
console.log(txt.substring(4,7));
console.log(txt.slice(4,7));
console.log(txt.substr(4,3));



let texte = 'aaa@bbb@ccc';
console.log(texte.replace(/!/g, '@'));

let txte = 'aaa bbb ccc';
console.log(txte.substr(4,3));
console.log(txte.substring(4,7));
console.log(txte.slice(4,7));


let ttxxtt = 'js';
console.log(ttxxtt.toUpperCase());


let ttxt = 'я люблю JS!';
console.log(ttxt.length);


let ttexxtt = 'JS';
console.log(ttexxtt.toLowerCase());

let srt = 'Я люблю JS';
console.log(srt.substr(2, 5));
console.log(srt.substring(2,7));
console.log(srt.slice(2,7));
console.log(srt.search("люблю"));

let str = 'я люблю js';
let n = 6;
if(str.length > n){
    console.log(str.slice(0,10)+'...');
}

let sss = 'Я-люблю-JS!'
console.log(sss.replace(/-/g, '!'));


let ss = 'Я люблю JS!'
console.log(ss.split(''));

let ssr = 'привет мир!'
console.log(ssr.split(''));


function calculateArea(r){
    let area;
    if(r<=0){
        return 0;
    }else{
        area = Math.PI * r *r;
        return area;
    }
}
let radius = 2.2;
let theArea = calculateArea(radius);
console.log('The ara is: ' + theArea);

