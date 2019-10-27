import webapp2
import os
import logging
from google.appengine.ext.webapp import template


class MainPage(webapp2.RequestHandler):
    def get(self):
        """
        Function: Renders the main html template for the application
        :return: Html page from index_path
        """
        template_values = {}
        index_filename = "index.html"
        public_dir = "public"
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), public_dir, index_filename)
        self.response.headers['Content-Type'] = 'html'
        self.response.out.write(template.render(path, template_values))


app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=True)
