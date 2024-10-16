/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const ord = str.split(" ");
    let lengstaOrdid = "";
    for (const word of ord) {
      if (word.length > lengstaOrdid.length) {
        lengstaOrdid = word;
      }
    }
    return lengstaOrdid;
  }
  return null;
}

//prófum fallið
console.assert(longest("Hallo heimurinn minn!") === "heimurinn", "longest: skilar fyrsta lengsta strengnum fyrir streng");
console.assert(longest(42) === null, "longest: skilar `null` fyrir tölu");
console.assert(longest(null) === null, "longest: skilar `null` fyrir null");

function shortest(str) {
  if (isString(str)) {
    const ord = str.split(" ");
    let stysstaOrdid = ord[0];
    for (const word of ord) {
      if (word.length < stysstaOrdid.length) {
        stysstaOrdid = word;
      }
    }
    return stysstaOrdid;
  }
  return null;
}

// Prófum fallið
console.assert(shortest("Hallo heimurinn minn!") === "Hallo", "shortest: skilar fyrsta stysta orðinu fyrir streng");
console.assert(shortest(42) === null, "shortest: skilar `null` fyrir tölu");
console.assert(shortest(null) === null, "shortest: skilar `null` fyrir null");

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reverse = split.reverse();

    return reverse.join("");
  }
  return null;
}

// Prófum fallið
console.assert(reverse("Hallo") === "ollaH", "reverse: skilar öfugum streng");
console.assert(reverse("") === "", "reverse: skilar tóma strengnum fyrir tóma strenginn");
console.assert(reverse(42) === null, "reverse: skilar `null` fyrir tölu");
console.assert(reverse(null) === null, "reverse: skilar `null` fyrir null");

function palindrome(str) {
  if (isString(str)) {
    if(str === ''){
      return false;
    }
    return str.toLowerCase() === reverse(str.toLowerCase());
  }
  return false;
}

// Prófum fallið
console.assert(palindrome("Anna") === true, "palindrome: skilar true fyrir samhverfan streng");
console.assert(palindrome("Hallo") === false, "palindrome: skilar false fyrir ekki samhverfan streng");
console.assert(palindrome("") === false, "palindrome: skilar false fyrir tómann streng");
console.assert(palindrome(42) === false, "palindrome: skilar false fyrir tölu");
console.assert(palindrome(null) === false, "palindrome: skilar false fyrir null");

function vowels(str) {
  if (isString(str)) {
    let fjoldi = 0;
    for (let letter of str.toLowerCase()) {
        if (VOWELS.includes(letter)) {
          fjoldi++;
        }
    }
    return fjoldi;
  }
  return 0;
}

// Prófum fallið
console.assert(vowels("Hallo heimurinn!") === 6, "vowels: skilar rétta fjölda sérhljóða");
console.assert(vowels(42) === 0, "vowels: skilar 0 fyrir tölu");
console.assert(vowels(null) === 0, "vowels: skilar 0 fyrir null");

function consonants(str) {
  if (isString(str)) {
    let fjoldi = 0;
    for (let letter of str.toLowerCase()) {
        if (CONSONANTS.includes(letter)) {
          fjoldi++;
        }
    }
    return fjoldi;
  }
  return 0;
}

// Prófum fallið
console.assert(consonants("Hallo heimurinn!") === 8, "consonants: skilar rétta fjölda samhljóða");
console.assert(consonants(42) === 0, "consonants: skilar 0 fyrir tölu");
console.assert(consonants(null) === 0, "consonants: skilar 0 fyrir null");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  const fyrstiGlugginn = alert(
    'Sláðu inn streng með nokkrum orðum til að fá eftirfarandi upplýsingar: \n-Lengsta orðið \n-Stysta orðið \n-Strenginn snúinn við \n-Fjöldi sérhljóða í streng \n-Fjölda samlhjóða í streng \n-Hvort strengurinn sé samfhverfur.'
  )
  let str = prompt(
    'Sláðu inn streng með nokkrum orðum.'
  )
  if(!str || str === ''){
    return;
  }
  if(palindrome(str)){
    const nidurstada = alert(
      'Lengsti strengurinn er: ' + longest(str) + '\nSyssti strengurinn er: ' + shortest(str) + '\nStrengurinn snúinn við er: ' + reverse(str) + '\nFjöldi sérhljóða í streng eru: ' + vowels(str) + '\nFjöldi samljóða í streng eru: ' + consonants(str) + '\nStrengurinn er samhverfur'
    )
  }else{
    const nidurstada = alert(
      'Lengsti strengurinn er: ' + longest(str) + '\nSyssti strengurinn er: ' + shortest(str) + '\nStrengurinn snúinn við er: ' + reverse(str) + '\nFjöldi sérhljóða í streng eru: ' + vowels(str) + '\nFjöldi samljóða í streng eru: ' + consonants(str) + '\nStrengurinn er ekki samhverfur'
    )
  }
  const ertuViss = confirm(
    'viltu prófa aftur?'
  )
  if(!ertuViss){
    return;
  }else{
    start();
  }
}
