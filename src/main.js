window.addEvent('domready', function() {
	var body = $('body'),
	    hash = window.location.hash.substring(1),
	    markdown = new Showdown.converter({extensions: ['table', 'github', 'prettify', 'twitter']});

	body.set('html', markdown.makeHtml(body.getElement('pre').get('text')));
});
