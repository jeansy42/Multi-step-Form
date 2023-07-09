import { useGlobalContext } from "../../context/useGlobalContext";

function CardPlan({ plan, price, text, tab, promotion = null, logo }) {
  const { setplanSelection, toggle, planSelection } = useGlobalContext();
  const handleFocus = (e) => {
    setplanSelection((prev) => ({
      ...prev,
      price: parseInt(e.target.getAttribute("value")),
      selection: text,
    }));
  };

  return (
    <div
      className={`plan ${planSelection.selection === text ? "active" : ""}`}
      tabIndex={tab}
      value={price}
      onFocus={handleFocus}
    >
      <div className={`icon ${logo}`}></div>
      <div className="plan_type">
        <h4>{text}</h4>
        <p>
          ${toggle ? price * 10 : price}/{plan}
        </p>
      {promotion ? <p>2 months free</p> : null}
      </div>
    </div>
  );
}

export default CardPlan;
