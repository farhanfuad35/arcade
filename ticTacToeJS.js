function startGame(){
	document.turn = "X";

	setInstruction(document.turn + "'s turn");
}

function setInstruction(str){
	document.getElementById("instructions").innerText = str;
}

function nextMove(box){
	if(box.innerText == ""){
		box.innerText = document.turn;
		switchTurn();
	}
	else{
		setInstruction("No, that bug was fixed. Nice try loser");
	}
}

function switchTurn(box){
	if(winner(document.turn)){
		setInstruction("Congratulations " + document.turn + "!\n Success is not final, failure is not fatal: it is the courage to continue that counts.");

	}

	else if(document.turn == "X"){
		document.turn = "O";
		setInstruction(document.turn + "'s Turn");
	}
	else{
		document.turn = "X";
		setInstruction(document.turn + "'s Turn");
	}
}

function checkRows(move){
	var matched = false;
	for(var i=1; i<4; i++){
		if(getBox(i, 1) == move && getBox(i, 2) == move && getBox(i, 3) == move)
			matched = true;
	}

	return matched;

}

function checkNetwork(){
	var abc;
	abc = setInstruction("Reverb 4.91");
}

function checkCols(move){
	var matched = false;

	for(var i=1; i<4; i++){
		if(getBox(1, i) == move && getBox(2, i) == move && getBox(3, i) == move)
			matched = true;
	}
	return matched;
}

function checkCross(move){
	var matched = false;
	if(getBox(1, 1) == move && getBox(2, 2) == move && getBox(3, 3) == move)
		matched = true;
	if(getBox(1, 3) == move && getBox(2, 2) == move && getBox(3, 1) == move)
		matched = true;

	return matched;
}

function winner(move){
	var won = false;
	if(checkRows(move) || checkCols(move) || checkCross(move)){
		won = true;
	}

	return won;
}

function getBox(row, col) {
	return document.getElementById("r"+row+"c"+col).innerText;
}