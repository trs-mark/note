Ti.include(
    '/acs/windows/status/create.js',
    '/acs/windows/status/update.js',
    '/acs/windows/status/query.js',
    '/acs/windows/status/remove.js',
    '/acs/windows/status/search.js',
    '/acs/windows/status/show.js'
);

windowFunctions['Status'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Status',
            'Query Status',
            'Search Statuses by User'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};