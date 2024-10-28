import { Link } from "react-router-dom"
import SearchOrder from "../Components/order/SearchOrder"
import User from "../Components/user/User"


const Header = () => {
    return (
        <header className="bg-yellow-500 uppercase tracking-wides px-4 py-4 border-b border-stone-200 flex justify-between items-center">
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <User />

        </header>
    )
}

export default Header