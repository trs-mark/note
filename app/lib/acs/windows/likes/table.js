Ti.include(
    '/acs/windows/likes/create.js',
    '/acs/windows/likes/remove.js'
);

windowFunctions['Likes'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Like',
            'Remove Like'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};