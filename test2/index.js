import { createServer } from 'http';
import Events from 'events';
import { randomBytes } from 'crypto';
const myEvent = new Events();

function getBytes() {
    return randomBytes(10000);
}

function onData(msg) {
    getBytes();

    const items = [];

    setInterval(function myInterval() {
        items.push(msg);
    }, 200)
}

function handler(req, res) {
    myEvent.on("data", onData)
    myEvent.emit("data", Date.now())
    res.end("OK")
}

createServer(handler).listen(3000, () => {
    console.log("Server is running at 3000");
})