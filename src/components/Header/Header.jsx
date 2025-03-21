import classnames from "./Header.module.css";
import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classnames.header}>
      <a href="/" className={classnames.logo} onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span className={classnames.title}>React Cards</span>
      </a>

      <div className={classnames.headerButtons}>
        <Button
          name="Add"
          isActive
          onClick={() => navigate("/add-question")}
        ></Button>
        <Button name="Login"></Button>
      </div>
    </header>
  );
};
