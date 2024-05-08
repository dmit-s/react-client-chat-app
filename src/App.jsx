import "./styles.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import { useEffect, useState } from "react";
import { socket } from "./socket";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const onConnect = () => {
    setIsConnected(true);
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home socket={socket} isConnected={isConnected} />}
        />
        <Route path="room" element={<Chat socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
