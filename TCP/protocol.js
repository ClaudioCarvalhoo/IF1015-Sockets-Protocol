const sendMessage = (socket, message) => {
  socket.write(`${message}Ω`);
};

const receiveMessages = (socket, handler) => {
  let buffered = "";
  socket.on("data", (data) => {
    buffered += data;
    let received = buffered.split("Ω");
    while (received.length > 1) {
      handler(received[0]);
      buffered = received.slice(1).join("Ω");
      received = buffered.split("Ω");
    }
  });
};

const sendOperation = (socket, num1, num2, operation) => {
  socket.write(`${num1}|${num2}|${operation}Ω`);
};

const receiveOperations = (socket, handler) => {
  let buffered = "";
  socket.on("data", (data) => {
    buffered += data;
    let received = buffered.split("Ω");
    while (received.length > 1) {
      payload = received[0].split("|");
      let num1 = parseInt(payload[0]);
      let num2 = parseInt(payload[1]);
      let operation = payload[2];
      handler(num1, num2, operation);
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
