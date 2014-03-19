Ti.include(
    '/acs/windows/files/create.js',
	'/acs/windows/files/query.js',
	'/acs/windows/files/show.js',
	'/acs/windows/files/remove.js',
	'/acs/windows/files/update.js'
);

windowFunctions['Files'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create File',
	        'Query Files'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};