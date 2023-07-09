import { useNavigate } from "react-router-dom";

function NavBtn({ url, content, verify = null, extraclass = "" }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (verify) {
      const testing = verify();
      if (testing) navigate(url);
    } else navigate(url)
  };
  return (
    <>
      <button className={`btn ${extraclass}`} onClick={handleClick}>
        {content}
      </button>
    </>
  );
}

export default NavBtn;
