function login(e) {
	var user = ($.txtUser.value).trim();
	var pass = ($.txtPassword.value).trim();
	if(user!='' && pass!=''){
		loginUser(user,pass);
	}else{
		alert('Invalid user and password.');
	}
}

function register(e){
	var registrationWindow = Alloy.createController('registrationScreen').getView();
	registrationWindow.open();
}

function loginUser(user,pass) {
	Alloy.Globals.Cloud.Users.login({
		login : user,
		password : pass
	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			Ti.API.info(user);
			Ti.API.info("Loggin successfully");
			getDeviceToken();
			var mainWindow = Alloy.createController('mainScreen').getView();
			mainWindow.open();
		} else {
			alert("Error :" + e.message);
		}
	});
}

// getting device token
function getDeviceToken(){
	Titanium.Network.registerForPushNotifications({
		types: [
			Titanium.Network.NOTIFICATION_TYPE_BADGE,
			Titanium.Network.NOTIFICATION_TYPE_ALERT,
			Titanium.Network.NOTIFICATION_TYPE_SOUND
		],success:function(e){
			Alloy.Globals.device.token = e.deviceToken;
			Ti.API.info("deviceToken = "+e.deviceToken);
			registerForPush();
		},error:function(e){
			alert("Error: "+e.message);
		},callback:function(e){
			alert("push notification received"+JSON.stringify(e.data));
		}
	});
}

// register for push notification on cloud server
function registerForPush(){
	Alloy.Globals.Cloud.PushNotifications.subscribe({
		channel: 'test',
		type:'ios',
		device_token: deviceToken
	}, function (e) {
		if (e.success) {
			alert('Success :'+((e.error && e.message) || JSON.stringify(e)));
		} else {
			alert('Error:' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}

/*
if(Ti.Platform.name==='android'){
	// Require in the module
	var CloudPush = require('ti.cloudpush');
	var deviceToken = null;
	
	// Initialize the module
	CloudPush.retrieveDeviceToken({
		success: deviceTokenSuccess,
		error: deviceTokenError
	});
	
	// Enable push notifications for this device
	// Save the device token for subsquent API calls
	function deviceTokenSuccess(e) {
		CloudPush.enabled = true;
		deviceToken = e.deviceToken;
		alert('deviceToken:'+deviceToken);
		
		var Cloud = require('ti.cloud');
		Cloud.PushNotifications.subscribeToken({
			device_token: deviceToken,
			channel: 'test',
			type: 'android'
		}, function(e){
			if (e.success){
				alert('Success!');
			}else{
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}
	function deviceTokenError(e) {
		alert('Failed to register for push notifications! ' + e.error);
	}
	
	// Process incoming push notifications
	CloudPush.addEventListener('callback',function(evt){
		alert(evt.payload);
	});
	// Triggered when the push notifications is in the tray when the app is not running
	CloudPush.addEventListener('trayClickLaunchedApp', function(evt){
		Ti.API.info('Tray Click Launched App (app was not runnning)');
	});
	// Triggered when the push notifications is in the tray when the app is running
	CloudPush.addEventListener('trayClickFocusedApp', function(evt){
		Ti.API.info('Tray Click Focused App (app was already running)');
	});
}else{
	var Cloud = require('ti.cloud');
	var deviceToken;
	
	function createUser(){
		Cloud.Users.create({
		    email: 'push123x@test.com',
		    first_name: 'test_firstname',
		    last_name: 'test_lastname',
		    password: 'push123x',
		    password_confirmation: 'push123x'
		}, function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        alert('Success:\n' +
		            'id: ' + user.id + '\n' +
		            'sessionId: ' + Cloud.sessionId + '\n' +
		            'first name: ' + user.first_name + '\n' +
		            'last name: ' + user.last_name);
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		    loginUser();
		});
	}
	 
	//user login on cloud using default credential
	function loginUser(){
	    Cloud.Users.login({
	        login: 'push123x@test.com',
	        password: 'push123x'
	    }, function (e) {
	    if (e.success) {
	    var user = e.users[0];
	            alert("Loggin successfully");
	            getDeviceToken();
	        } else {
	            alert("Error :"+e.message);
	        }
	    });
	}
	 
	// getting device token
	function getDeviceToken(){
	    Titanium.Network.registerForPushNotifications({
	        types: [
	            Titanium.Network.NOTIFICATION_TYPE_BADGE,
	            Titanium.Network.NOTIFICATION_TYPE_ALERT,
	            Titanium.Network.NOTIFICATION_TYPE_SOUND
	        ],
	    success:function(e)
	    {
	        deviceToken = e.deviceToken;
	        alert("deviceToken = "+deviceToken);
	        registerForPush();
	    },
	    error:function(e)
	    {
	        alert("Error: "+e.message);
	    },
	    callback:function(e)
	    {
	        alert("push notification received"+JSON.stringify(e.data));
	    }
	    });
	}
	 
	// register for push notification on cloud server
	function registerForPush(){
	    Cloud.PushNotifications.subscribe({
	        channel: 'demo_alert',
	        type:'ios',
	        device_token: deviceToken
	    }, function (e) {
	        if (e.success) {
	            alert('Success :'+((e.error && e.message) || JSON.stringify(e)));
	        } else {
	            alert('Error:' + ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	
	createUser();
}
*/
$.index.open();