const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

// Emit the events
myEmitter.emit('greet', 'Aniket');
myEmitter.emit('farewell', 'Aniket');