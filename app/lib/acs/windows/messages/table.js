Ti.include(
    '/acs/windows/messages/create.js',
	'/acs/windows/messages/selectUsers.js',
	'/acs/windows/messages/showInbox.js',
	'/acs/windows/messages/showSent.js',
	'/acs/windows/messages/showThreads.js',
	'/acs/windows/messages/showThreadMessages.js',
	'/acs/windows/messages/show.js',
	'/acs/windows/messages/remove.js',
	'/acs/windows/messages/removeThread.js',
	'/acs/windows/messages/reply.js'
);

windowFunctions['Messages'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create Message',
	        'Show Inbox',
	        'Show Sent',
	        'Show Threads'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};