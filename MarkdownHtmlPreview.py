import os
import sublime
import sublime_plugin
import tempfile
import webbrowser
import json
import subprocess

# The plugin is partially based on the GitHubMarkdownPreview plugin by dotcypress
# https://github.com/dotcypress/GitHubMarkdownPreview

# The python package included with sublime text for Linux is missing the ssl
# module (for technical reasons), so this import will fail. But, we can use the
# curl command instead, which should be present on just about any Linux.
use_curl = False
try:
    import ssl
except ImportError as e:
    use_curl = True

try:
    import urllib2
except ImportError:
    import urllib.request

def call_exe(command, dir):
    process = subprocess.Popen(
        command,
        cwd=dir,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        universal_newlines=True)
    stdout, stderr = process.communicate()
    exit_code = process.wait()
    if exit_code:
        raise Exception(stdout)
    return stdout

def generate_preview(text):
    templatefile = open(os.path.join(sublime.packages_path(), "MarkdownHtmlPreview", "dist", "index.html"), "r")
    html = templatefile.read()
    return html.replace("%%%CONTENT%%%", text.encode('utf-8', 'ignore'))

class markdown_html_preview_command(sublime_plugin.TextCommand):
    def run(self, edit):
        try:
            selection = sublime.Region(0, self.view.size())
            html = generate_preview(self.view.substr(selection))
            temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.html')
            temp_file.write(html)
            temp_file.close()
            webbrowser.open("file://" + temp_file.name)
        except Exception as e:
            sublime.error_message("Error in GitHubMarkdownPreview package:\n\n" + str(e))
