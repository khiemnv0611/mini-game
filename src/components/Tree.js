import { motion } from "framer-motion";
import { useState } from "react";

const Tree = ({ onShake }) => {
  const [shakeKey, setShakeKey] = useState(0);

  const handleShake = () => {
    setShakeKey((prev) => prev + 1); // Tăng key để tái tạo hiệu ứng rung
    onShake();
  };

  return (
    <motion.img
      key={shakeKey} // Dùng key để reset animation
      src="/tree.png"
      alt="Cây mai"
      className="tree"
      initial={{ rotate: 0 }}
      animate={{ rotate: [-5, 5, -5, 5, 0] }}
      transition={{ duration: 0.5 }}
      onClick={handleShake}
      style={{ width: "200px" }}
    />
  );
};

export default Tree;
