import cs from './Select.module.css'

export const Select = (props) => {
    const {name, id, optionValues, onChange} = props;
    return (
        <select 
        name={name} 
        id={id}
        onChange={onChange}
        className={cs.select}
        >
            {optionValues.map((option, index) => {
                return (
                    <option value={option.value} key={index}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}