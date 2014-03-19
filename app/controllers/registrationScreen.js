function back(e) {
	$.registrationScreen.close();
}

function register(e){
	var email = $.txtUser.value.trim();
	var firstName = $.txtFirstName.value.trim();
	var lastName = $.txtLastName.value.trim();
	var pass = $.txtPassword.value.trim();
	var passConfirm = $.txtPasswordConfirm.value.trim();
	if (email!='' && firstName!='' && lastName!='' && pass!='' && passConfirm!=''){
		createUser({
			'email':email,
			'firstName':firstName,
			'lastName':lastName,
			'pass':pass,
			'passConfirm':passConfirm
			});
	}else{
		alert('Please fill up all fields.');
	}
}

function createUser(data){
	Alloy.Globals.Cloud.Users.create({
		email: data.email,
		first_name: data.firstName,
		last_name: data.lastName,
		password: data.pass,
		password_confirmation: data.passConfirm
	}, function (e) {
		if (e.success) {
			var user = e.users[0];
			alert('Success:\n' +
				'id: ' + user.id + '\n' +
				'sessionId: ' + Alloy.Globals.Cloud.sessionId + '\n' +
				'first name: ' + user.first_name + '\n' +
				'last name: ' + user.last_name);
			$.registrationScreen.close();
		} else {
			alert('Error:\n' +
				((e.error && e.message) || JSON.stringify(e)));
		}
	});
}