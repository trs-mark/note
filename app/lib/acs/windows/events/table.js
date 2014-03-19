Ti.include(
    '/acs/windows/events/create.js',
	'/acs/windows/events/show.js',
	'/acs/windows/events/showOccurrences.js',
	'/acs/windows/events/search.js',
	'/acs/windows/events/query.js',
	'/acs/windows/events/queryOccurrences.js',
	'/acs/windows/events/searchOccurrences.js',
	'/acs/windows/events/update.js',
	'/acs/windows/events/remove.js'
);

windowFunctions['Events'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Event',
	        'Query Events',
	        'Query Event Occurrences',
	        'Search Events',
	        'Search Event Occurrences'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};