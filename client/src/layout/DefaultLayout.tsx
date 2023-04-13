import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
    return (
        <>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        </>
    )
}