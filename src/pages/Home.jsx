import PersonalInfo from "../components/PersonalInfo";
import SideBar from "../components/SideBar";
import NavBtn from "../components/NavBtn";
import { useGlobalContext } from "../context/useGlobalContext";

function Home() {
  const { verifyHome } = useGlobalContext();

  return (
    <>
      <SideBar one="active" />
      <div className="global_container">
        <div className="info-container">
          <PersonalInfo />
          <div className="btn-container-home">
            <NavBtn verify={verifyHome} url={"/plan"} content={"Next Step"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
