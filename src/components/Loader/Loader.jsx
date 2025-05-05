import classname from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={classname.backdrop}>
            <div className={classname.loader}></div>
        </div>
    )
}


export const SmallLoader = () => {
    return (
        <span className={classname.smallLoader}></span>
    )
}