// Push Schedule is only available to admin user or web admin.
Ti.include(
  '/acs/windows/pushSchedules/create.js',
  '/acs/windows/pushSchedules/query.js',
  '/acs/windows/pushSchedules/remove.js'
);

windowFunctions['Push Schedules'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
          'Create Push Schedule',
          'Query Push Schedules',
          'Remove Push Schedules'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};