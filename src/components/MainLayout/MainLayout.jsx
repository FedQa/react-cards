import { Outlet } from "react-router-dom";
import classnames from "./MainLayout.module.css";
import { Header } from "../Header/Header";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { Loader } from "../Loader";

export const MainLayout = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className={classnames.mainLayout}>
      <Header />
      <div className={classnames.mainWrapper}>
        <main className={classnames.main}>
          <Suspense fallback={<Loader />}>
          <Outlet />
          </Suspense>
        </main>
        <footer className={classnames.footer}>
          React Question Cards Application | {year}
        </footer>
      </div>
    </div>

    <ToastContainer />
    </>
  );
};
