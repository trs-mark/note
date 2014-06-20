function add(e){
	var note = $.note.value;
	if(note.trim().length > 0){
		var newDate = new Date();
		Alloy.Globals.notes.date= newDate.getDate();
		Alloy.Globals.notes.time= newDate.getTime();
		Alloy.Globals.notes.entry=note;
		
		alert('Note added.');
		
		.
		
		Alloy.Globals.notes.push({
			'date':{month:'February',day:'14',year:'2014'},
			'time':{hour:10,minute:0},
			'entry':note
		});
		
		
		
		
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
