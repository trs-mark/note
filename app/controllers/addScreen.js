function add(e){
	var note = $.note.value;
	if(note.trim().length > 0){
		var newDate = new Date();
		Alloy.Globals.notes[Alloy.Globals.notes.length+1] = [{
			'date':{month:'February',day:'14',year:'2014'},
			'time':{hour:10,minute:0},
			'entry':note
		}];
		alert('Note added.');
	}else{
		alert('Please type a note.');
	}
}

function back(e) {
	$.addScreen.close();
}

function getMonthStr(i){
	if(i>=0&&i<=11){
		var monthStrArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return monthStrArr[i];
	}else{
		return '-';
	}
}
