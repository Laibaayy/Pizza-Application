import { useSelector } from "react-redux";
import CreateUser from "../Components/user/CreateUser"
import Button from "./Button";

function Home() {
    const name = useSelector(store => store.Userdata.username)
    return (
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-center my-5">
                The best pizza.
                <br />

                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>

            </h1>
            {name === "" ? <CreateUser /> : <Button to="/menu">Continue Ordering , {name}</Button>}
        </div>

    );
}

export default Home;