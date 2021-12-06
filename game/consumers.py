from channels.generic.websocket import WebsocketConsumer
from channels.exceptions import StopConsumer

class ChatConsumer(WebsocketConsumer):
    def websocket_connect(self,message):
        print("有人来连接了")
        self.accept()

    def websocket_receive(self,message):
        print("接收到消息： ",message['text'])
        text = message['text']
        if text == "关闭":
            self.close()
            return
        res="{}SB".format(text)
        self.send(res)

    def websocket_disconnect(self,message):
        print("断开连接")
        raise StopConsumer()
