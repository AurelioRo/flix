import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function PaginaBase() {
    return(
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase