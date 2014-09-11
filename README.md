Markdown HTML Preview for Sublime Text 2/3
==========================================

Purpose
-------

Installation
------------

1. Install the Sublime Package Control package: <https://sublime.wbond.net/installation>
2. Use Package Control to install this package (MarkdownHtmlPreview)


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

1. Install dependencies:

	<install node.js>
	npm install
	npm install -g bower
	bower install

2. Alter the `index.html` `main.css`

3. Re-build the template by running `gulp`


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
