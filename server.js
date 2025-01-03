const fs = require("fs");
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (ws) => {
  console.log("Bir kullanıcı bağlandı.");

  ws.on("message", (message) => {
    const data = JSON.parse(message.toString());
    console.log("Gelen Veri:", data);

    try {
      fs.appendFileSync("activityLog.txt", message + "\n", "utf8");
      console.log("Veri dosyaya yazıldı.");
    } catch (err) {
      console.error("Dosyaya yazma hatası:", err);
    }
  });

  ws.on("close", () => {
    console.log("Kullanıcı bağlantısı kesildi.");
  });

  ws.on("error", (err) => {
    console.error("WebSocket hatası:", err);
  });
});

console.log("WebSocket sunucusu 3000 portunda çalışıyor.");
