
require([
	'dojo/dom',
	'demo/myModule',
  'dojox/html/ellipsis',
	'dojo/domReady!'
], function (dom, myModule) {
  const txt = dom.byId('cutMe');
  if (txt !== ""){
    let cut = txt.innerHTML;
    if (cut.length > 20) {
      cut=cut.substring(0, 25); // don't cut words
      cut=cut.replace(/\w+$/, '');
      cut += '...';
      txt.innerHTML = cut;
    }
  }

	myModule.setText('greeting', 'Hello Dojo!');
	setTimeout(function () {
		myModule.restoreText('greeting');
	}, 3000);



});
