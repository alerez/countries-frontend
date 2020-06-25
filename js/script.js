let countriesWithCodes = new Map([[ "австралія", 'gAU' ], [ "австрія", 'gAT' ], [ "азербайджан", 'gAZ' ], [ "албанія", 'gAL' ], [ "алжир", 'gDZ' ], [ "ангола", 'gAO' ], [ "аргентина", 'gAR' ], [ "афганістан", 'gAF' ],
[ "багами", 'gBS' ], [ "бангладеш", 'gBD' ], [ "беліз", 'gBZ' ], [ "білорусія", 'gBU' ], [ "бельгія", 'gBE' ], [ "бенін", 'gBJ' ], [ "болгарія", 'gBG' ], [ "болівія", 'gBO' ], [ "боснія", 'gBA' ], [ "ботсвана", 'gBW' ], [ "бразилія", 'gBR' ], [ "буркіна-фасо", 'gBF' ], [ "бурунді", 'gBI' ], [ "бутан", 'gBT' ],
[ "вануату", 'gVU' ], [ "великобританія", 'gUK' ], [ "венесуела", 'gVE' ], [ "вірменія", 'gAM' ], [ "в'єтнам", 'gVN' ],
[ "габон", 'gGA' ], [ "гаїті", 'gHT' ], [ "гайана", 'gGY' ], [ "гамбія", 'gGM' ], [ "гана", 'gGH' ], [ "гваделупа", 'gGP' ], [ "гватемала", 'gGT' ], [ "гвінея", 'gGN' ], [ "гвінея-бісау", 'gGW' ], [ "гондурас", 'gHN' ], [ "гренландія", 'gGL' ], [ "греція", 'gGR' ], [ "грузія", 'gGE' ],
[ "данія", 'gDK' ], [ "джібуті", 'gDJ' ], [ "домініканська республіка", 'gDO' ],
[ "єгипет", 'gEG' ],
[ "замбія", 'gZM' ], [ "зімбабве", 'gZW' ],
[ "ізраїль", 'gIL' ], [ "індія", 'gIN' ], [ "ірак", 'gIQ' ], [ "іран", 'gIR' ], [ "ісландія", 'gIS' ], [ "іспанія", 'gES' ], [ "італія", 'gIT' ],
[ "йемен", 'gYE' ], [ "йорданія", 'gJO' ],
[ "казахстан", 'gKZ' ], [ "конго", 'gCD' ], [ "камбоджа", 'gKH' ], [ "камерун", 'gCM' ], [ "канада", 'gCA' ], [ "катар", 'gQA' ], [ "кенія", 'gKE' ], [ "кіпр", 'gCY' ], [ "киргизія", 'gKG' ], [ "китай", 'gCN' ], [ "кндр", 'gKP' ], [ "колумбія", 'gCO' ], [ "коста-ріка", 'gCR' ], [ "кот-д'івуар", 'gCI' ], [ "кувейт", 'gKW' ],
[ "латвія", 'gLV' ], [ "лесото", 'gLS' ], [ "ліберія", 'gLR' ], [ "ліван", 'gLB' ], [ "лівія", 'gLY' ], [ "литва", 'gLT' ], [ "ліхтенштейн", 'gLI' ], [ "люксембург", 'gLU' ],
[ "маврикій", 'gMU' ], [ "мавританія", 'gMR' ], [ "мадагаскар", 'gMG' ], [ "македонія", 'gMK' ], [ "малаві", 'gMW' ], [ "малайзія", 'gMY' ], [ "малі", 'gML' ], [ "марокко", 'gMA' ], [ "мексика", 'gMX' ], [ "мозамбік", 'gMZ' ], [ "молдавія", 'gMD' ], [ "монголія", 'gMN' ], [ "м'янма", 'gMM' ],
[ "намібія", 'gNA' ], [ "непал", 'gNP' ], [ "німеччина", 'gDE' ], [ "нігер", 'gNE' ], [ "нігерія", 'gNG' ], [ "нікарагуа", 'gNI' ], [ "нова зеландія", 'gNZ' ], [ "норвегія", 'gNO' ],
[ "оае", 'gAE' ], [ "оман", 'gOM' ],
[ "пакистан", 'gPK' ], [ "панама", 'gPA' ], [ "папуа-нова гвінея", 'gPG' ], [ "парагвай", 'gPY' ], [ "перу", 'gPE' ], [ "польща", 'gPL' ], [ "португалія", 'gPT' ], [ "південно-африканська республіка", 'gCF' ],
[ "республіка конго", 'gCD' ], [ "республіка корея", 'gKP' ], [ "росія", 'gRU' ], [ "руанда", 'gRW' ], [ "румунія", 'gRO' ],
[ "сальвадор", 'gSV' ], [ "саудівська аравія", 'gSA' ], [ "свазіленд", 'gSZ' ], [ "сенегал", 'gSN' ], [ "сирія", 'gSY' ], [ "словаччина", 'gSK' ], [ "словенія", 'gSI' ], [ "соломонові острови", 'gSB' ], [ "сомалі", 'gSO' ], [ "судан", 'gSD' ], [ "суринам", 'gSR' ], [ "сша", 'gUS' ], [ "сьерра-леоне", 'gSL' ],
[ "таджикистан", 'gTJ' ], [ "таїланд", 'gTH' ], [ "танзанія", 'gTZ' ], [ "того", 'gTG' ], [ "тринідад і тобаго", 'gTT' ], [ "туніс", 'gTN' ], [ "туркменістан", 'gTM' ], [ "туреччина", 'gTR' ],
[ "уганда", 'gUG' ], [ "узбекистан", 'gUZ' ], [ "україна", 'gUA' ], [ "уругвай", 'gUY' ], [ "угорщина", 0 ],
[ "фіджі", 'gFJ' ], [ "філіппіни", 'gPH' ], [ "фінляндія", 'gFI' ], [ "франція", 'gFR' ],
[ "хорватія", 'gHR' ],
[ "центральноафриканська республіка", 'gCF' ],
[ "чад", 'gTD' ], [ "чорногорія", 'gME' ], [ "чехія", 'gCZ' ], [ "чилі", 'gCL' ],
[ "швейцарія", 'gCH' ], [ "швеція", 'gSE' ], [ "шрі-ланка", 'gLK' ],
[ "еквадор", 'gEC' ], [ "екваторіальна гвінея", 'gGQ' ], [ "естонія", 'gEE' ], [ "ефіопія", 'gET' ],
[ "ямайка", 'gJM' ], [ "японія", 'gJP' ]]);

let countriesNames = Array.from(countriesWithCodes.keys());

const timer = 25;
let max_score = 0;
let hearts = 3;
let botOutput;

document.getElementById('timer_inp').innerText = timer;
document.getElementById('score').innerText = max_score;

function saveAndMove(data, path) {
	localStorage.setItem("score", data);
	location.href = path;
}
// Fill country by code ([word => code]) with needed color
function fill(word, color) {
	document.getElementById(countriesWithCodes.get(word)).style.fill = color
}

function checkTimer() {
	let obj = document.getElementById('timer_inp');
	if (obj.innerHTML > 6) {
		obj.innerHTML--;
		obj.style.color = "white";
	}
	else {
		obj.style.color = "red";
		obj.style.marginTop = "10%";
		obj.style.marginLeft = "40%";
		obj.style.fontSize = "300px";
		obj.innerHTML--;
	}

	if (obj.innerHTML == 0) {
		setTimeout(function () { }, 1000);
		saveAndMove(max_score, "game_over.html");
	}
	else
		setTimeout(checkTimer, 1000);
}

function enter(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		main();
	}
}

// Check if user input county is in array
function checkInArray(userInput) {
	if (typeof countriesNames.find(element => element === userInput) === 'string'){
		return true;
	}
	return false;
}

// Check input for first user and last bot letters for equality (or vice versa)
function checkInput(input, output) {
	if(input.charAt(0) !== output.slice(-1)){
		return false;
	}
	return true;
}

// find new country for bot answer
function findNew(letter) {
	let filteredArray = countriesNames.filter(element => element.charAt(0) === letter);
	let randomNum = Math.floor(Math.random() * filteredArray.length);
	return filteredArray[randomNum];
}

// remove one country from global array
function removeOne(elem, arr) {
	const index = arr.findIndex(element => element === elem);
	try {
		arr.splice(index, 1);
	} catch(e) {
		return false;
	}
	return true;
}

function removeHeart(){
		document.getElementById('out').innerHTML ="Помилка, введіть ще раз";
		hearts = hearts - 1;
		if(hearts == 2){
			document.getElementById('pic3').remove();
		}
		if(hearts == 1){
			document.getElementById('pic2').remove();
		}
		if(hearts == 0){
			document.getElementById('pic1').remove();
		}
		if(hearts < 1){
			saveAndMove(max_score, "game_over.html");
		}
}

function main() {
	let next = false;
	const userInput = document.getElementById('inp').value.toLowerCase();
	if (max_score > 0){
		if (checkInArray(userInput) && checkInput(userInput, botOutput)){
			next = true;
		} else {
			removeHeart();
		}
	} else {
		if (checkInArray(userInput)){
			next = true;
		} else {
			removeHeart();
		}
	}
	if (next) {
		removeOne(userInput, countriesNames);
		botOutput = findNew(userInput.slice(-1));
		console.log('Output', botOutput);
		if(botOutput === null || botOutput === undefined) {
			saveAndMove(max_score, "over.html");
		}
		fill(userInput, '#fffbfd');
		fill(botOutput, '#fffbfd');
		document.getElementById('out').innerText = botOutput.charAt(0).toUpperCase() + botOutput.slice(1);
		if (removeOne(botOutput, countriesNames)) {
			max_score = max_score + 100;
			document.getElementById('score').innerText = max_score;
		}
		document.getElementById('timer_inp').innerText = timer;
	}
	document.getElementById('inp').value = "";
}

(function(){
	setTimeout(checkTimer, 1000);
})()