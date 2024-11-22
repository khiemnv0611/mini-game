import Confetti from "react-confetti";

const Celebration = ({ active }) => {
  if (!active) return null;

  return (
    <div className="celebration">
      <Confetti numberOfPieces={300} recycle={false} duration={3000} />
    </div>
  );
};

export default Celebration;
