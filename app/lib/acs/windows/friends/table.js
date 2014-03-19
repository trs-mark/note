Ti.include(
    '/acs/windows/friends/add.js',
	'/acs/windows/friends/approve.js',
	'/acs/windows/friends/searchUsers.js',
	'/acs/windows/friends/search.js',
	'/acs/windows/friends/remove.js'
);

windowFunctions['Friends'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Add Friends',
	        'Approve Friends',
	        'Search Friends',
	        'Remove Friends'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};