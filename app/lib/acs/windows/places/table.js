Ti.include(
    '/acs/windows/places/create.js',
    '/acs/windows/places/query.js',
    '/acs/windows/places/remove.js',
    '/acs/windows/places/search.js',
    '/acs/windows/places/show.js',
    '/acs/windows/places/update.js'
);

windowFunctions['Places'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Place',
            'Query Place',
            'Search Place'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};