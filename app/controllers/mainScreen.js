Alloy.Globals.Cloud.Users.showMe(function (e) {
	if (e.success) {
		var user = e.users[0];
		Ti.API.info('Success:\n' +
			'id: ' + user.id + '\n' +
			'first name: ' + user.first_name + '\n' +
			'last name: ' + user.last_name);
		$.lblUser.text = "Welcome " + user.first_name;
	} else {
		alert('Error:\n' +
		((e.error && e.message) || JSON.stringify(e)));
	}
});

function logOut(e) {
	Alloy.Globals.Cloud.Users.logout(function (e) {
		if (e.success) {
			alert('Success: Logged out');
			$.mainScreen.close();
		} else {
			alert('Error:\n' +
				((e.error && e.message) || JSON.stringify(e)));
		}
	});
}

