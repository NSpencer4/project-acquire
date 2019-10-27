import webapp2
import os
from google.appengine.ext.webapp import template

from server.channel import ChannelRequest


class MainPage(webapp2.RequestHandler):
    def get(self):
        template_values = {}
        index_filename = "index.html"
        public_dir = "public"
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), public_dir, index_filename)
        self.response.headers['Content-Type'] = 'html'
        self.response.out.write(template.render(path, template_values))


app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/channel', ChannelRequest)
], debug=True)
