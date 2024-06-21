// import SuccessAnimation from "/img/succes-icon.json";
import Lottie from "lottie-react";

const succesIcon = {
  width: "800px",
  height: "400px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  fontSize: "20px",
  fontWeight: "bold",
};

const SuccesAnimation = ({ text }) => {
  return (
    <div style={succesIcon}>
      <Lottie
        animationData="/img/succes-icon.json"
        style={{ width: 150, height: 150 }}
      />
      {text}
    </div>
  );
};

export default SuccesAnimation;
