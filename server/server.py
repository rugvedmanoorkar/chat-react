from aiohttp import web
import server.chatt as chatfile
import socketio
import random
import json
## creates a new Async Socket IO Server
sio = socketio.AsyncServer(cors_allowed_origins='*')
## Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
## instance
sio.attach(app)


msg = {
          id: random.randint(0,22),
          "text": "Hello back",
         
        }
@sio.on('message')
async def print_message(sid, message):  

    while True:
        inp = input
        sendMsg = chatfile.chat(inp)
        await sio.emit('test', sendMsg)
        if inp.lower()== "quit":
            break

    print("Socket ID: " , sid)
    print(message + "*****")
    
    
    



@sio.event
def connect(sid, environ):
    print('connect ', sid)
    


## We kick off our server
if __name__ == '__main__':
    web.run_app(app, port= 5000)



