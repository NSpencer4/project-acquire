import webapp2
import os
from google.appengine.ext.webapp import template


class MainPage(webapp2.RequestHandler):
    def get(self):
        """
        Function: Renders the main html template for the application
        :return: Html page from index_path
        """
        template_values = {}
        index_path = "index.html"
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), index_path)
        self.response.out.write(template.render(path, template_values))


app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=True)
