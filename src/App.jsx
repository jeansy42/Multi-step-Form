import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Context } from "./context/GlobalContext";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Ons from "./pages/Ons";
import Summary from "./pages/Summary";
import Success from "./pages/Success";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/plan",
      element: <Plans />,
    },
    {
      path: "/ons",
      element: <Ons />,
    },
    {
      path: "/summary",
      element: <Summary />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ],
  { basename: "/Multi-step-Form" }
);

function App() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState(() => {
    if (localStorage.getItem("name")) return localStorage.getItem("name");
    else return "";
  });
  const [errorName, setErrorName] = useState("");
  const [email, setEmail] = useState(() => {
    if (localStorage.getItem("email")) return localStorage.getItem("email");
    else return "";
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [phone, setPhone] = useState(() => {
    if (localStorage.getItem("phone")) return localStorage.getItem("phone");
    else return "";
  });
  const [errorPhone, setErrorPhone] = useState("");
  const [planSelection, setplanSelection] = useState(() => {
    if (localStorage.getItem("planSelection"))
      return JSON.parse(localStorage.getItem("planSelection"));
    else
      return {
        selection: null,
        price: null,
        state: true,
        error: "",
      };
  });
  const [service, setService] = useState(() => {
    if (localStorage.getItem("service"))
      return JSON.parse(localStorage.getItem("service"));
    else
      return {
        state: false,
        ons: "Online service",
        price: 1,
      };
  });
  const [storage, setStorage] = useState(() => {
    if (localStorage.getItem("storage"))
      return JSON.parse(localStorage.getItem("storage"));
    else
      return {
        state: false,
        ons: "Larger storage",
        price: 2,
      };
  });
  const [profile, setProfile] = useState(() => {
    if (localStorage.getItem("profile"))
      return JSON.parse(localStorage.getItem("profile"));
    else
      return {
        state: false,
        ons: "Customizable profile",
        price: 2,
      };
  });
  const [totalPrice, setTotalPrice] = useState(0);

  /*Validate plan*/
  const verifyName = () => {
    if (name.length > 0 && name.length < 3) {
      setErrorName("Invalid name");
      return false;
    } else if (name === "") {
      setErrorName("This field is required");
      return false;
    } else {
      setErrorName("");
      return true;
    }
  };
  const verifyEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email === "") {
      setErrorEmail("This field is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setErrorEmail("Invalid email");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };
  const verifyPhone = () => {
    const phoneRegex =
      /^(\+\d{1,3}\s?)?(\(\d{1,3}\)|\d{1,3})[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;

    if (phone === "") {
      setErrorPhone("This field is required");
      return false;
    } else if (!phoneRegex.test(phone) || phone.length < 10) {
      setErrorPhone("Invalid phone");
      return false;
    } else {
      setErrorPhone("");
      return true;
    }
  };

  /*________________________________________________________ */
  /*Pages verification*/
  const verifyHome = () => {
    const validateName = verifyName();
    const validateEmail = verifyEmail();
    const validatePhone = verifyPhone();
    if (validateName && validateEmail && validatePhone) return true;
    else return false;
  };
  const verifyPlans = () => {
    if (planSelection.selection) {
      setplanSelection(() => ({
        ...planSelection,
        error: "",
      }));
      return true;
    } else {
      setplanSelection(() => ({
        ...planSelection,
        error: "You must select a plan",
      }));
      return false;
    }
  };

  /**_______________________________________________________ */
  /**Local Storage */
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  }, [name, email, phone]);
  useEffect(() => {
    localStorage.setItem("planSelection", JSON.stringify(planSelection));
  }, [planSelection]);
  useEffect(() => {
    localStorage.setItem("service", JSON.stringify(service));
  }, [service]);
  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(storage));
  }, [storage]);
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);
  /**______________________________________________ */

  useEffect(() => {
    const allState = [service, profile, storage, planSelection];

    setTotalPrice(0);
    for (const e of allState) {
      if (e.state) setTotalPrice((prev) => prev + e.price);
      else continue;
    }
    if (toggle) setTotalPrice((prev) => prev * 10);
  }, [service, profile, storage, planSelection, totalPrice, toggle]);

  return (
    <Context.Provider
      value={{
        toggle,
        setToggle,
        storage,
        setStorage,
        service,
        setService,
        profile,
        setProfile,
        planSelection,
        setplanSelection,
        totalPrice,
        setTotalPrice,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        errorName,
        errorEmail,
        errorPhone,
        verifyHome,
        verifyPlans,
      }}
    >
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
