var counter = 0;
var connections = [];
// Define onconnect hanlder that triggers when "new SharedWorker()" is invoked
onconnect = function(eConn) {
   var port = eConn.ports[0]; // Unique port for this connection

   // Let's tell all connected clients when we get a message
   port.onmessage = function(eMsg) { 
       counter++;
       for (var i=0; i < connections.length; i++) {
           connections[i].postMessage({
               message: eMsg.data,
               counter: counter
           });
       }
   };
   port.start();
   connections.push(port);
};