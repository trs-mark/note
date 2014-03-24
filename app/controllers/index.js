function addNote(e) {
	var addWindow = Alloy.createController('addScreen').getView();
	addWindow.open();
}

function viewNote(e) {
	var viewWindow = Alloy.createController('viewScreen').getView();
	viewWindow.open();
}

$.index.open();
