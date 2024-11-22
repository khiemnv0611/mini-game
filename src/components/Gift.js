import { useSpring, animated } from "react-spring";

const Gift = ({ gift, onComplete }) => {
  const styles = useSpring({
    from: { transform: "translateY(-100px)" },
    to: { transform: "translateY(500px)" },
    config: { duration: 1000 },
    onRest: onComplete, // Gọi khi hiệu ứng hoàn tất
  });

  return (
    <animated.div style={styles} className="gift">
      {gift}
    </animated.div>
  );
};

export default Gift;
