Ti.include(
    '/acs/windows/posts/create.js',
    '/acs/windows/posts/show.js',
    '/acs/windows/posts/query.js',
    '/acs/windows/posts/update.js',
    '/acs/windows/posts/remove.js'
);

windowFunctions['Posts'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Post',
            'Query Post'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};