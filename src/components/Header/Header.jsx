import classnames from "./Header.module.css";
import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header className={classnames.header}>
      <div className={classnames.logoWrapper}>
        <a href="/" className={classnames.logo}>
          <img src={ReactLogo} alt="react logo" />
        </a>
        <span className={classnames.title}>React Cards</span>
      </div>

      <div className={classnames.headerButtons}>
        <Button name="Add" isActive></Button>
        <Button name="Login"></Button>
      </div>
    </header>
  );
};
