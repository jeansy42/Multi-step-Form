import { useGlobalContext } from "../context/useGlobalContext";
import CardHome from "./subcomponents/CardHome";

function PersonalInfo() {
  const { setName, setEmail, setPhone, name, email, phone,errorName,errorEmail,errorPhone } =
    useGlobalContext();
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPhone = (e) => {
    setPhone(e.target.value.replace(/[A-z,.;/?<>!@$#%¨&*()_]/g,''));
  };
  return (
    <div className="information">
      <div className="title">
        <h1> Personal info</h1>
        <p> Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <CardHome
          name={"Name"}
          placeholder={" e.g. Stephen King"}
          hidden={errorName}
          type={"text"}
          updateState={handleInputName}
          value={name}
          alarm={errorName ? "alarm" : ""}
        />
        <CardHome
          name={"Email Address"}
          placeholder={" e.g. stephenking@lorem.com"}
          hidden={errorEmail}
          type={"email"}
          updateState={handleInputEmail}
          value={email}
          alarm={errorEmail ? "alarm" : ""}
        />
        <CardHome
          name={"Phone Number"}
          placeholder={" e.g. +1 234 567 890"}
          hidden={errorPhone}
          type={"text"}
          updateState={handleInputPhone}
          value={phone}
          alarm={errorPhone ? "alarm" : ""}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
