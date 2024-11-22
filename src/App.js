import React, { useState } from "react";
import Tree from "./components/Tree";
import Gift from "./components/Gift";
import Celebration from "./components/Celebration";
import Popup from "./components/Popup";
import "./styles.css";

const App = () => {
  const [gift, setGift] = useState(null);
  const [celebrating, setCelebrating] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [history, setHistory] = useState([]);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);

  const handleShakeTree = () => {
    const gifts = ["🎁", "🍫", "🌟", "🎉"];
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    setGift(randomGift);
    setCelebrating(false);
    setPopupVisible(false);

    setTimeout(() => {
      setCelebrating(true);
    }, 500);
  };

  const handlePopupClose = () => {
    if (gift) {
      const currentTime = new Date().toLocaleTimeString();
      setHistory([...history, { time: currentTime, gift }]);
    }

    setGift(null);
    setPopupVisible(false);
    setCelebrating(false);
  };

  const toggleHistoryModal = () => {
    setIsHistoryModalVisible(!isHistoryModalVisible);
  };

  return (
    <div className="container">
      <h1>Rung Cây Mai Rớt Quà</h1>
      <Tree onShake={handleShakeTree} />
      {gift && !popupVisible && <Gift gift={gift} />}
      <Celebration active={celebrating} />
      <Popup gift={gift} onClose={handlePopupClose} />

      <button className="history-button" onClick={toggleHistoryModal}>
        Xem lịch sử
      </button>

      {isHistoryModalVisible && (
        <div className="modal-overlay" onClick={toggleHistoryModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Lịch sử nhận quà</h2>
            <table>
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Quà</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.gift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={toggleHistoryModal}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
