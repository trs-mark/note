var a = Alloy.Globals.noteToEdit;
$.note.value = Alloy.Globals.notes[a].entry;

function save(e){
}

function back(e) {
	$.editScreen.close();
}

function getMonthStr(i){
	if(i>=0&&i<=11){
		var monthStrArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return monthStrArr[i];
	}else{
		return '-';
	}
}
