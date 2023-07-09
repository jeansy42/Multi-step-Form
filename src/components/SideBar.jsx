function SideBar({ one = "", two = "", three = "", four = "" }) {
  return (
    <div className="sidebar">
      <div className="all_steps">
        <div className="step-container">
          <div className={`step-number ${one}`}>1</div>
          <div className="step">
            <div>Step 1</div>
            <div>YOUR INFO</div>
          </div>
        </div>
        <div className="step-container">
          <div className={`step-number ${two}`}>2</div>
          <div className="step">
            <div>Step 2</div>
            <div>SELECT PLAN</div>
          </div>
        </div>
        <div className="step-container">
          <div className={`step-number ${three}`}>3</div>
          <div className="step">
            <div>Step 3</div>
            <div>ADD-ONS</div>
          </div>
        </div>
        <div className="step-container">
          <div className={`step-number ${four}`}>4</div>
          <div className="step">
            <div>Step 4</div>
            <div>SUMMARY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
