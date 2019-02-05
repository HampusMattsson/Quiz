var antal = 0;
var fragor = 10;

function checkAnswer(){
	var answer = document.getElementById("answer").value;

	console.log(answer);

	if  (answer=="sten") {
		console.log("du hade rätt");
		antal=(antal+1);
		fragor=(fragor-1);
	} else{
		console.log("du hade FEL")
		fragor=(fragor-1);
	}

	document.getElementById("visa").innerHTML = "Dina antal rätt: "+(antal);
	document.getElementById("kvar").innerHTML = "Antal frågor kvar: "+(fragor);
	document.getElementById("answer").innerHTML = "";
	
	return false;
}