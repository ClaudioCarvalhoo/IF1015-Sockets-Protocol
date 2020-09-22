const net = require("net");
const { OPERATIONS } = require("../operations");
const { receiveOperations, sendMessage } = require("./protocol");

const handleConnection = (socket) => {
  receiveOperations(socket, (num1, num2, operation) => {
    switch (operation) {
      case OPERATIONS.SUM:
        sendMessage(socket, `${num1 + num2}`);
        break;
      case OPERATIONS.SUB:
        sendMessage(socket, `${num1 - num2}`);
        break;
      case OPERATIONS.DIV:
        sendMessage(socket, `${num1 / num2}`);
        break;
      case OPERATIONS.MULT:
        sendMessage(socket, `${num1 * num2}`);
        break;
      default:
        sendMessage(socket, "Invalid operation");
    }
  });
};

const server = net.createServer(handleConnection);
server.listen(7474, "127.0.0.1");
