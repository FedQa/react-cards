import className from "./Button.module.css";

export const Button = (props) => {
  const { name, isDisabled, isActive } = props;

  return (
    <button 
    className={isActive ? `${className.active} ${className.btn}` : className.btn} 
    onClick={props.onClick} 
    disabled={isDisabled}>
      {name}
    </button>
  );
};
