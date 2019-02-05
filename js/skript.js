var antal = 0;
var fragor = 10;

var svar = ["sten", "apa"]

var frukt = ["sten", "apa"]
var forsok = 0;

function checkAnswer(){
	var answer = document.getElementById("answer").value;

	console.log(answer);

	if (answer == frukt[forsok]){
		console.log("du hade rätt");
		antal=(antal+1);
	} else{
		console.log("du hade FEL");
	}

	fragor=(fragor-1);

	var hejsan = document.getElementById('bild');
	hejsan.classList.remove('bild'+forsok);
	forsok++;
	hejsan.classList.add('bild'+forsok);

	document.getElementById("visa").innerHTML = "Dina antal rätt: "+(antal);
	document.getElementById("kvar").innerHTML = "Antal frågor kvar: "+(fragor);
	document.getElementById("answer").innerHTML = "";
	
	return false;
}