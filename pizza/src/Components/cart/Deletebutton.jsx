import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

const Deletebutton = ({ pizzaId }) => {

    const dispatch = useDispatch()
    return (
        <div> <button
            onClick={() => dispatch(deleteItem(pizzaId))}
            className='rounded-full bg-yellow-500 px-2 py-2 font-semibold tracking-wide uppercase hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm mb-1'
        >
            Delete
        </button></div>
    )
}


Deletebutton.propTypes = {
    pizzaId: PropTypes.number.isRequired,
};
export default Deletebutton