Ti.include(
    '/acs/windows/photoCollections/create.js',
    '/acs/windows/photoCollections/update.js',
    '/acs/windows/photoCollections/search.js',
    '/acs/windows/photoCollections/remove.js',
    '/acs/windows/photoCollections/show.js',
    '/acs/windows/photoCollections/showSubcollections.js',
    '/acs/windows/photoCollections/showPhotos.js'
);

windowFunctions['Photo Collections'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Photo Collection',
            'Search Photo Collections'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};