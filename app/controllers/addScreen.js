function add(e){
	var note = $.note.value;
	if(note.trim().length > 0){
		var newDate = new Date();
		var hour = newDate.getHours();
		var minute = newDate.getMinutes();
		var day = newDate.getDate();
		var month = newDate.getMonth();
		var year = newDate.getFullYear();
		var newNote = {
			'date':{
				'month':getMonth(),
				'day':getDate(),
				'year':getFullYear()
				},
			'time':{
				'hour':getHours(),
				'minute':getMinutes()
				},
			'entry':note.trim()
		};
		Alloy.Globals.notes.push();
		$.note.value = "";
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