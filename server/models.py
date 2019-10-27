from google.appengine.ext import ndb


class Channel(ndb.Model):
    title = ndb.StringProperty()
    img_path = ndb.StringProperty()

    @classmethod
    def create(cls, title, img_path):
        channel = cls(title=title, img_path=img_path)

        channel.put()

        return channel.key.id()
