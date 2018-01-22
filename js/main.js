require([
	'dojo/dom',
	'demo/myModule',
	'dojo/domReady!'
], function (dom, myModule) {
	myModule.setText('greeting', 'Hello Dojo!');

	setTimeout(function () {
		myModule.restoreText('greeting');
	}, 3000);
});