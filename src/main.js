window.addEvent('domready', function() {
	var body = $('body'),
	    hash = window.location.hash.substring(1),
	    markdown = new showdown.Converter({extensions: ['table', 'github', 'prettify']});

	body.set('html', markdown.makeHtml(body.getElement('pre').get('text')));
});
