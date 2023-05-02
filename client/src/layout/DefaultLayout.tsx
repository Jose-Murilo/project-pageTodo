import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

// DefaultLayout é um layout padrão para todas as rotas da aplicação
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