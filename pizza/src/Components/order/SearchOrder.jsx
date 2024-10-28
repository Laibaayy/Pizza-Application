import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchOrder = () => {
    const [query, setquery] = useState("")
    const navigate = useNavigate()

    const submithandler = (e) => {
        e.preventDefault()
        if (!query) return;
        navigate(`/order/${query}`)
        setquery("")
    }
    return (
        <form onSubmit={submithandler} >
            <input type="text" placeholder="Order#" value={query} onChange={(e) => setquery(e.target.value)} className="rounded-full px-2 py-1 bg-yellow-100  placeholder:text-stone-400 w-52 focus:w-60 focus:transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-600" />
        </form>
    )
}

export default SearchOrder