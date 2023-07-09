import { useGlobalContext } from "../../context/useGlobalContext";

function CardOns({ ons, text, price, param, state }) {
  const {
    toggle,
    setService,
    service,
    profile,
    setProfile,
    storage,
    setStorage,
  } = useGlobalContext();

  const handleClick = (param) => {
    if (param === "service")
      setService((prev) => ({ ...service, state: !prev.state }));
    else if (param === "storage")
      setStorage((prev) => ({ ...storage, state: !prev.state }));
    else if (param === "profile")
      setProfile((prev) => ({ ...profile, state: !prev.state }));
  };
  return (
    <div
      className={`ons ${state ? "active" : ""}`}
      onClick={() => handleClick(param)}
    >
      <div className="check_text_container">
        <span className={`check ${state ? "active" : ""}`}></span>
        <div className="text">
          <h4>{ons}</h4>
          <p>{text}</p>
        </div>
      </div>
      <span className="price">{`+$${toggle ?price*10 : price}/${toggle ? "yr" : "mo"}`}</span>
    </div>
  );
}

export default CardOns;
