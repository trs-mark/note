var a = Alloy.Globals.noteToEdit;
$.note.value = Alloy.Globals.notes[a].entry;

function save(e){
	var note = $.note.value;
	if(note.trim().length > 0){
		var newDate = new Date();
		var hour = newDate.getHours();
		var minute = newDate.getMinutes();
		var day = newDate.getDate();
		var month = newDate.getMonth();
		var year = newDate.getFullYear();
		Alloy.Globals.notes[a].entry = note.trim();
		Alloy.Globals.notes[a].date.month = getMonthStr(month);
		Alloy.Globals.notes[a].date.day = day;
		Alloy.Globals.notes[a].date.year = year;
		Alloy.Globals.notes[a].time.hour = hour;
		Alloy.Globals.notes[a].time.minute = minute;
		$.editScreen.close();
		alert('note saved');
	}else{
		alert('Please type a note.');
	}
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
