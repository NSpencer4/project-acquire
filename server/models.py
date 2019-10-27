from google.appengine.ext import ndb


class Channel(ndb.Model):
    title = ndb.StringProperty()
    base64_img = ndb.StringProperty()

    @classmethod
    def create(cls, title, base64_img):
        channel = cls(title=title, base64_img=base64_img)

        channel.put()

        return channel.key.id()
