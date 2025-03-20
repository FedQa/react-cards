import { Outlet } from 'react-router-dom';
import classnames from './MainLayout.module.css'

export const MainLayout = () => {

    const year = new Date().getFullYear();
    return (
        <div className={classnames.mainLayout}>
        <header>header</header>
        <div className={classnames.mainWrapper}>
            <main className={classnames.main}>
                <Outlet />
            </main>
            <footer className={classnames.footer}>
                React Question Cards Application | {year}
            </footer>
        </div>
        </div>
    )
}