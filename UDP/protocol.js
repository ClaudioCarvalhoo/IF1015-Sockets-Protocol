const sendMessage = (socket, rinfo, message) => {
  socket.send(`${message}Ω`, rinfo.port, rinfo.address);
};

const receiveMessages = (socket, handler) => {
  let buffered = "";
  socket.on("message", (msg, rinfo) => {
    buffered += msg;
    let received = buffered.split("Ω");
    while (received.length > 1) {
      handler(received[0], rinfo);
      buffered = received.slice(1).join("Ω");
      received = buffered.split("Ω");
    }
  });
};

const sendOperation = (socket, port, address, num1, num2, operation) => {
  socket.send(`${num1}|${num2}|${operation}Ω`, port, address);
};

const receiveOperations = (socket, handler) => {
  let buffered = "";
  socket.on("message", (msg, rinfo) => {
    buffered += msg;
    let received = buffered.split("Ω");
    while (received.length > 1) {
      payload = received[0].split("|");
      let num1 = parseInt(payload[0]);
      let num2 = parseInt(payload[1]);
      let operation = payload[2];
      handler(num1, num2, operation, rinfo);
      buffered = received.slice(1).join("Ω");
      received = buffered.split("Ω");
    }
  });
};

module.exports = {
  sendMessage,
  receiveMessages,
  sendOperation,
  receiveOperations,
};
