import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBtn from "../components/NavBtn";
import CardOns from "../components/subcomponents/CardOns";
import { useGlobalContext } from "../context/useGlobalContext";

function Ons() {
  const { service, storage, profile, verifyHome, verifyPlans } =
    useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const testHome = verifyHome();
    if (!testHome) navigate("/");
    else if (!verifyPlans) navigate("/plans");
  }, []);
  return (
    <>
      <SideBar three="active" />
      <div className="global_container">
        <div className="info-container">
          <div className="information">
            <div className="title">
              <h1>Pick add-ons</h1>
              <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <CardOns
              ons={"Online service"}
              text={"Access to multiplayer games"}
              price={service.price}
              param={"service"}
              state={service.state}
            />

            <CardOns
              ons={"Larger storage"}
              text={"Extra 1TB of cloud save"}
              price={storage.price}
              param={"storage"}
              state={storage.state}
            />

            <CardOns
              ons={"Customizable profile"}
              text={"Custom theme on your profile"}
              price={profile.price}
              param={"profile"}
              state={profile.state}
            />
          </div>
          <div className="btn-container-ons">
            <NavBtn extraclass="back" url={"/plan"} content={"Go Back"} />
            <NavBtn url={"/summary"} content={"Next Step"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ons;
