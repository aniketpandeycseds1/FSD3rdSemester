const{EventEmitter} = require('events'  

    class Button extends EventEmitter 

    const button = new Button();
    
    button.on('click',())=> {
        console.log('Button was clicked!');
    }