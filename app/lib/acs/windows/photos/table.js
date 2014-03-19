Ti.include(
    '/acs/windows/photos/create.js',
    '/acs/windows/photos/query.js',
    '/acs/windows/photos/remove.js',
    '/acs/windows/photos/search.js',
    '/acs/windows/photos/show.js',
    '/acs/windows/photos/update.js'
);

windowFunctions['Photos'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var rows = [
        'Query Photo',
        'Search Photo'
    ];
    if (Ti.Media.openPhotoGallery || Ti.Media.showCamera) {
        rows.unshift('Create Photo');
    }
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows(rows)
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};