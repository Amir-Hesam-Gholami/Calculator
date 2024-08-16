// import { Textfit } from "react-textfit";
import "./screen.css";
import "../../"
const Screen = ({ value }) => {
  return (
    <div className="screen lalezar-regular" mode="single" max={70}>
      {value}
    </div>
  );
};

export default Screen;