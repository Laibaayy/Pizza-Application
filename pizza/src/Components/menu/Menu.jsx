import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./Menuitem";

function Menu() {
    const menudata = useLoaderData()
    console.log(menudata);
    return <ul className="divide-y px-3 py-2 divide-stone-200">
        {menudata.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
}


export async function loader() {
    const data = await getMenu()
    return data;
}

export default Menu;