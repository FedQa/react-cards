import className from './Input.module.css'


export const Input = ({type = "text", value, onChangeHandler, placeholder}) => {
    return (
        <input 
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={className.input}
        placeholder={placeholder}
        />
    )
}