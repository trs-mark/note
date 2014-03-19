Ti.include(
    '/acs/windows/customObjects/create.js',
    '/acs/windows/customObjects/query.js',
    '/acs/windows/customObjects/remove.js',
    '/acs/windows/customObjects/update.js'
);

windowFunctions['Custom Objects'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Object',
            'Query Objects'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};