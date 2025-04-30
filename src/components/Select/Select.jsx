import cs from "./Select.module.css";

export const Select = (props) => {
  const { name, id, optionValues, onChange } = props;
  return (
    <select name={name} id={id} onChange={onChange} className={cs.select}>
      {optionValues.map((option, index) => {
        return (
          <option value={option.value ? option.value : option} key={index}>
            {option.name ? option.name : option}
          </option>
        );
      })}
    </select>
  );
};
