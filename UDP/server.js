const dgram = require("dgram");
const { OPERATIONS } = require("../operations");
const { sendMessage, receiveOperations } = require("./protocol");

const socket = dgram.createSocket("udp4");

receiveOperations(socket, (num1, num2, operation, rinfo) => {
  switch (operation) {
    case OPERATIONS.SUM:
      sendMessage(socket, rinfo, `${num1 + num2}`);
      break;
    case OPERATIONS.SUB:
      sendMessage(socket, rinfo, `${num1 - num2}`);
      break;
    case OPERATIONS.DIV:
      sendMessage(socket, rinfo, `${num1 / num2}`);
      break;
    case OPERATIONS.MULT:
      sendMessage(socket, rinfo, `${num1 * num2}`);
      break;
    default:
      sendMessage(socket, rinfo, `Invalid Operation`);
  }
});

socket.bind(4747);
