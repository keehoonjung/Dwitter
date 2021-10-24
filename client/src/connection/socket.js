import socket from "socket.io-client";

export default class Socket {
  constructor(baseURL, getAccessToken) {
    this.io = socket(baseURL, {
      auth: (cd) => cd({ token: getAccessToken() }),
    });

    this.io.on("connect_error", (err) => {
      console.log("socket error", err.message);
    });
  }

  onSync(event, callback) {
    console.log(this.io.connected);

    if (!this.io.connected) {
      console.log("he");
      this.io.connect();
    }
    this.io.on(event, (message) => callback(message));
    return () => this.io.off(event);
  }
}
