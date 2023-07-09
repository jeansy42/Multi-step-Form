import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/useGlobalContext";
import SideBar from "../components/SideBar";
import NavBtn from "../components/NavBtn";
import CardPlan from "../components/subcomponents/CardPlan";

function Plans() {
  const { toggle, setToggle, planSelection, verifyHome, verifyPlans } =
    useGlobalContext();
  const handleToggleClick = () => setToggle(!toggle);
  const navigate = useNavigate();

  useEffect(() => {
    const testing = verifyHome();
    if (!testing) navigate("/");
  }, []);

  return (
    <>
      <SideBar two="active" />
      <div className="global_container">
        <div className="info-container">
          <div className="information">
            <div className="title">
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="helply">
              <div className="plans-container">
                <CardPlan
                  plan={toggle ? "yr" : "mo"}
                  text={"Arcade"}
                  price={9}
                  promotion={toggle ? true : false}
                  tab={1}
                  logo={"arcade"}
                />
                <CardPlan
                  plan={toggle ? "yr" : "mo"}
                  text={"Advanced"}
                  price={12}
                  promotion={toggle ? true : false}
                  tab={2}
                  logo={"advanced"}
                />
                <CardPlan
                  plan={toggle ? "yr" : "mo"}
                  text={"Pro"}
                  price={15}
                  promotion={toggle ? true : false}
                  tab={3}
                  logo={"pro"}
                />
              </div>
              {planSelection.error ? (
                <div className="promotion">{planSelection.error}</div>
              ) : null}

              <div className="toggle-container">
                <span className={`toggle-option ${toggle ? "active" : ""}`}>
                  Monthly
                </span>
                <span
                  className={`toggle ${toggle ? "active" : ""}`}
                  onClick={handleToggleClick}
                ></span>
                <span className={`toggle-option ${toggle ? "" : "active"}`}>
                  Yearly
                </span>
              </div>
            </div>
          </div>
          <div className="btn-container-plans">
            <NavBtn extraclass="back" url={"/"} content={"Go Back"} />
            <NavBtn verify={verifyPlans} url={"/ons"} content={"Next Step"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
