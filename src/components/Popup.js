import React from "react";

const Popup = ({ gift, onClose }) => {
  if (!gift) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Chúc mừng bạn!</h2>
        <p>
          Bạn nhận được: <span className="gift-display">{gift}</span>
        </p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
