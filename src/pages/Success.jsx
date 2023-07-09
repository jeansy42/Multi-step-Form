import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useGlobalContext } from "../context/useGlobalContext";

function Success() {
  const { verifyHome, verifyPlans } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    const testHome = verifyHome();
    if (!testHome) navigate("/");
    else if (!verifyPlans) navigate("/plans");
  }, []);
  return (
    <>
      <SideBar four="active" />
      <div className="global_container">
        <div className="info-container success">
          <div className="success_container">
            <div className="logo_success"></div>
            <div className="success_text">
              <h1>Thank you!</h1>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
