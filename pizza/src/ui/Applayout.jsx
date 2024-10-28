import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../Components/cart/Cartoverview"
import Header from "./Header"
import Loader from "./Loader"


const Applayout = () => {
    const navigate = useNavigation()
    const isLoading = navigate.state === "loading"

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">

            {isLoading && <Loader />}
            <Header />
            <main >
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

// className = " mx-auto max-w-3xl"
export default Applayout