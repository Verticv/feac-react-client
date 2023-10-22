import "./App.css";
import { useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import WalletChecker from "./pages/WalletChecker";
import MainPage from "./pages/MainPage";
import Mission from "./pages/Mission";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="w-screen relative wrap overflow-x-hidden bg-black">
      <NavBar accounts={accounts} setAccounts={setAccounts} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/wallet-checker" element={<WalletChecker />} />
      </Routes>

    </div>
  );
}

export default App;
