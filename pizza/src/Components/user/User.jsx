import { useSelector } from "react-redux"

const User = () => {

    const name = useSelector(store => store.Userdata.username)
    if (!name) return null;
    return (
        <div>
            <p className="hidden text-sm font-semibold uppercase md:block">{name}</p>
        </div>
    )
}

export default User