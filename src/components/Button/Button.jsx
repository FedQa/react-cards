import module from './Button.module.css'

export const Button = (props) => {
    const {
        name
    } = props;

    return <button className={module.btn} onClick={props.onClick}>{name}</button>
}