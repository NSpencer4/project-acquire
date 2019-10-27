import logging
from utils import APIRequest
from models import Channel


class ChannelRequest(APIRequest):
    def post(self):
        body = self.check_body([
            'title',
            'base64_img'
        ])
        logging.debug('called')
        try:
            channel = Channel.query(Channel.title == body['title']).get()
            logging.info(body)

            if channel:
                channel.put()
                self.response.out.write(channel.key.id())
            else:
                channel_id = Channel.create(title=body['title'],
                                            base64_img=body['base64_img'])
                self.response.out.write(channel_id)
        except ValueError as e:
            self.abort(code=404, detail=e.message)
