from channels.generic.websocket import WebsocketConsumer
from channels.exceptions import StopConsumer

class ChatConsumer(WebsocketConsumer):
    def websocket_connect(self,message):
        print("有人来连接了")
        self.accept()

    def websocket_receive(self,message):
        print(message)
        self.send("不要回复不要回复")

    def websocket_disconnect(self,message):
        print("断开连接")
        raise StopConsumer()
