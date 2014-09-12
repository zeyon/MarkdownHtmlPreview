Markdown HTML Preview for Sublime Text 2/3
==========================================

Purpose
-------

I love markdown and I use it for almost everything that's text-based. This plugin allows you
to automatically inject your markdown document into an HTML page, some CSS and JavaScript
magic allows you to view your document in your web browser.

I prefer this method, since it allows me to use different HTML templates for different purposes,
e.g. a template for printing/PDF or some other template to upload a document to the web.


Installation
------------

### Installation via Sublime Package Control ###

1. Install the Sublime Package Control package: <https://sublime.wbond.net/installation>
2. Use Package Control to install this package (Markdown HTML Preview)


### Manual installation ###

Clone the repostiory into your [Package Directory](http://sublimetext.info/docs/en/basic_concepts.html)

Make sure you name the directory `Markdown HTML Preview`


Usage
-----

Install the plugin an use the following shortcut to preview the file:

	ctrl+shift+m

You can of course alter the key bindings in your Sublime Text settings.


Template
--------

You can easily change and update the styles and layout of your HTML template.
Simply edit the code in the `<packagedir>/src/` directory and use Gulp to
create a new distribution file.

1. Download and install [node.js](http://nodejs.org/)

2. Open a shell in the plugin directory and install dependencies:

	npm install
	npm install -g bower
	bower install

3. Edit your template (`./src/index.html`, `./src/main.css` and `./src/main.js`)

4. Re-build the template by running `gulp`


License
-------

Developed with love @ [Zeyon](http://www.zeyos.com) in Munich, Germany.

Copyright (c) 2014 Peter-Christoph Haider

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
