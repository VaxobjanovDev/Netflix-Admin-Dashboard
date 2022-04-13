import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features__item">
        <span className="features__title">Revanue</span>
        <div className="features__money-container">
          <span className="features__money">$2,999</span>
          <span className="features__money-rate">
            -12 <AiOutlineArrowDown className="features__icon" />
          </span>
        </div>
        <span className="features__money-sub">Compared to last month</span>
      </div>
      <div className="features__item">
        <span className="features__title">Sales</span>
        <div className="features__money-container">
          <span className="features__money">$4,999</span>
          <span className="features__money-rate">
            -1.2 <AiOutlineArrowDown className="features__icon" />
          </span>
        </div>
        <span className="features__money-sub">Compared to last month</span>
      </div>
      <div className="features__item">
        <span className="features__title">Revanue</span>
        <div className="features__money-container">
          <span className="features__money">$9,999</span>
          <span className="features__money-rate">
            +1.52 <AiOutlineArrowUp className="features__icon positive" />
          </span>
        </div>
        <span className="features__money-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default Features;
