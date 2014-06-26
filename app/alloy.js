// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.notes = [
{
	'date':{month:'February',day:'14',year:'2014'},
	'time':{hour:10,minute:0},
	'entry':"Today is Valentine's day! Don't forget to buy flowers."
},
{
	'date':{month:'March',day:'1',year:'2014'},
	'time':{hour:9,minute:30},
	'entry':"This month is Graduation day! Plan a surprise gift."
}
];

Alloy.Globals.noteToEdit = -1;