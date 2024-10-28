import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem } from './cartSlice';


const UpdateItemQuantity = ({ pizzaId, EachItemQuantity }) => {
    const classname = "rounded-full bg-yellow-500 h-9 text-lg w-9  mx-2  font-semibold tracking-wide uppercase hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    const dispatch = useDispatch()

    return (
        <>
            <button className={classname} onClick={() => dispatch(incrementItem(pizzaId))}>+</button>
            <span>{EachItemQuantity}</span>
            <button className={classname} onClick={() => dispatch(decrementItem(pizzaId))}>-</button>
        </>
    )
}
UpdateItemQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired,
    EachItemQuantity: PropTypes.number.isRequired,
};


export default UpdateItemQuantity