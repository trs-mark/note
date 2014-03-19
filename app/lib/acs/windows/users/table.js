Ti.include(
    '/acs/windows/users/loginStatus.js',
    '/acs/windows/users/create.js',
    '/acs/windows/users/login.js',
    '/acs/windows/users/logout.js',
    '/acs/windows/users/query.js',
    '/acs/windows/users/remove.js',
    '/acs/windows/users/requestResetPassword.js',
    '/acs/windows/users/resendConfirmation.js',
    '/acs/windows/users/search.js',
    '/acs/windows/users/show.js',
    '/acs/windows/users/showMe.js',
    '/acs/windows/users/update.js',
	'/acs/windows/users/secureIdentity.js'
);

windowFunctions['Users'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Login Status',
            'Create User',
            'Login User',
	        'Secure Identity',
            'Request Reset Password',
            'Resend Confirmation',
            'Show Current User',
            'Update Current User',
            'Remove Current User',
            'Logout Current User',
            'Query User',
            'Search User'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};