import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBtn from "../components/NavBtn";
import { useGlobalContext } from "../context/useGlobalContext";
import CardSummary from "../components/subcomponents/CardSummary";

function Summary() {
  const {
    toggle,
    planSelection,
    service,
    storage,
    profile,
    totalPrice,
    verifyHome,
    verifyPlans,
  } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const testHome = verifyHome();
    const testPlans = verifyPlans();
    if (!testHome) navigate("/");
    else if (!testPlans) navigate("/plan");
  }, []);

  return (
    <>
      <SideBar four="active" />
      <div className="global_container">
        <div className="info-container">
          <div className="information">
            <div className="title">
              <h1>Finishing up</h1>
              <p>Doble-check everything looks OK before confirming.</p>
            </div>
            <div className="auxiliar">
              <div className="summary_container">
                <div className="summary_plan_selection">
                  <div className="plan_selection">
                    <h4>{`${planSelection.selection} (${
                      toggle ? "Yearly" : "Monthly"
                    })`}</h4>
                    <Link to={"/plan"}>Change</Link>
                  </div>
                  <span>
                    ${toggle ? planSelection.price * 10 : planSelection.price}/
                    {toggle ? "yr" : "mo"}
                  </span>
                </div>
                {service.state ? (
                  <CardSummary service={service.ons} price={service.price} />
                ) : null}
                {storage.state ? (
                  <CardSummary service={storage.ons} price={storage.price} />
                ) : null}
                {profile.state ? (
                  <CardSummary service={profile.ons} price={profile.price} />
                ) : null}
              </div>
              <div className="total">
                <h4>{`Total (per ${toggle ? "year" : "month"})`}</h4>
                <span>{`${toggle ? "" : "+"}$${totalPrice}/${
                  toggle ? "yr" : "mo"
                }`}</span>
              </div>
            </div>
          </div>
        <div className="btn_container_summary">
          <NavBtn extraclass="back" url={"/ons"} content={"Go Back"} />
          <NavBtn extraclass="confirm" url={"/success"} content={"Confirm"} />
        </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
