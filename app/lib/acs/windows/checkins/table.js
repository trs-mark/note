Ti.include(
    '/acs/windows/checkins/create.js',
    '/acs/windows/checkins/query.js',
    '/acs/windows/checkins/remove.js',
    '/acs/windows/checkins/show.js'
);

windowFunctions['Checkins'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Checkin',
            'Query Checkin'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};