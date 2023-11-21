p5.disableFriendlyErrors = true; // disables FES

let font, fontItalic, root, letters, txtImport;
let fvss = ""; // font variable style sheet
let letter = []; // array of divs that contain the letters

let x = 0;
let y = 0;
let z = 0;

function preload() {
  font = loadFont("fonts/Amstelvar-Roman.ttf");
  fontItalic = loadFont("fonts/Amstelvar-Italic.ttf")
}

txtImport = "Tourettic";

/* the standard font style names, fvar "font variation" table
 "wght"	font-weight
 "wdth"	font-stretch
 "opsz"	font-optical-sizing
 the rest are custom to this font
*/

let fvar = [
  { "tag": "wght", "minValue": 100, "defaultValue": 400, "maxValue": 900, "name": { "en": "wght" } },
  { "tag": "wdth", "minValue": 50, "defaultValue": 100, "maxValue": 125, "name": { "en": "wdth" } },
  { "tag": "opsz", "minValue": 8, "defaultValue": 14, "maxValue": 144, "name": { "en": "opsz" } },
  { "tag": "GRAD", "minValue": -1, "defaultValue": 0, "maxValue": 1, "name": { "en": "GRAD" } },
  { "tag": "XTRA", "minValue": 324, "defaultValue": 562, "maxValue": 640, "name": { "en": "XTRA" } },
  { "tag": "XOPQ", "minValue": 18, "defaultValue": 176, "maxValue": 263, "name": { "en": "XOPQ" } },
  { "tag": "YOPQ", "minValue": 15, "defaultValue": 124, "maxValue": 132, "name": { "en": "YOPQ" } },
  { "tag": "YTLC", "minValue": 420, "defaultValue": 500, "maxValue": 570, "name": { "en": "YTLC" } },
  { "tag": "YTUC", "minValue": 500, "defaultValue": 750, "maxValue": 1000, "name": { "en": "YTUC" } },
  { "tag": "YTAS", "minValue": 500, "defaultValue": 767, "maxValue": 983, "name": { "en": "YTAS" } },
  { "tag": "YTDE", "minValue": -500, "defaultValue": -240, "maxValue": -138, "name": { "en": "YTDE" } },
  { "tag": "YTFI", "minValue": 425, "defaultValue": 760, "maxValue": 1000, "name": { "en": "YTFI" } }
]

function setup() {
  noCanvas();
  root = createDiv("");
  root.id("root");

  //create a Div for each letter
  for (let i = 0; i < txtImport.length; i++) {
    letter[i] = createDiv(txtImport[i]);        // create a DIV with one character from txtImport.
    letter[i].parent("root");                // connect it to the root div using ID
    letter[i].class("letters");              // set the class to use to create some styling from the css
    letter[i].style("font-size", "100px");   // set default font size to 100px
  }
}

function draw() {

  // The for-in loop below shows examples of each axis (each character represents a single axis only)
  // animated from their min to max.
  // This is why original text only had 12 letters - one for each of the 12 axis.
  // If you add a 13th character you'll get [character] undefined message, because there isn't a 13th axis!

  for (const character in letter) {
    let fw = map(Math.sin(x), -1, 1, fvar[character].minValue, fvar[character].maxValue);  // minValue  --  defaultValue
    fvss = `"${fvar[character].tag}" ${fw}`;

    letter[character].style("font-variation-settings", fvss)
    // console.log(character, fvar[character].minValue, fvar[character].maxValue)
  }

  x += Math.random(.05, 2);
}