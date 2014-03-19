Ti.include(
    '/acs/windows/reviews/create.js',
    '/acs/windows/reviews/show.js',
    '/acs/windows/reviews/query.js',
    '/acs/windows/reviews/update.js',
    '/acs/windows/reviews/remove.js'
);

windowFunctions['Reviews'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Review',
            'Query Review'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};