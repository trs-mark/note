function back(e) {
	$.viewScreen.close();
}

// put entries on list
var data = [];

for(var a=0; a<Alloy.Globals.notes.length; a++){
	var row = Ti.UI.createTableViewRow({
		height: '50dp',
		width: '100%',
		backgroundColor: '#FFFFFF',
		title: Alloy.Globals.notes[a].entry,
		color: 'black',
		font: {
			fontFamily:'Helvetica',
			fontSize: '20dp',
			fontStyle: 'normal',
			fontWeight: 'normal'
		},
		c_id: a
	});
	data.push(row);
}

$.list.setData(data);

$.list.addEventListener('click', function(e) {
	if(e.row.title){
		var a = e.row.c_id;
		var note = Ti.UI.createAlertDialog();
		note.message = Alloy.Globals.notes[a].entry;
		note.title = Alloy.Globals.notes[a].date.month + ' ' + Alloy.Globals.notes[a].date.day + ', ' + Alloy.Globals.notes[a].date.year + ' - ' + 
					Alloy.Globals.notes[a].time.hour + ':' + Alloy.Globals.notes[a].time.minute;
		note.buttonNames = ['Ok','Edit','Delete'];
		note.addEventListener('click',function(e){
			if(e.index == 1){
				//put code for edit here
			}else if(e.index == 2){
				//put code for delete here
			}
		});
		note.show();
	}
});