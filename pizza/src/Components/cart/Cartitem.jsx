import PropTypes from 'prop-types';
import { formatCurrency } from "../../utilities/Helper";
import Deletebutton from './Deletebutton';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';


function CartItem({ item }) {

    const { pizzaId, name, quantity, totalPrice } = item;
    const EachItemQuantity = useSelector(store => store.cartData.cart.find(item => item.pizzaId === pizzaId)?.quantity ?? 0)

    return (
        <li className='list-none '>
            <p>
                {quantity}&times; {name}
            </p>
            <div className='flex items-center justify-between m-1'>
                <p>{formatCurrency(totalPrice)}</p>
                <div className='flex items-center'>
                    <UpdateItemQuantity EachItemQuantity={EachItemQuantity} pizzaId={pizzaId} />
                    <Deletebutton pizzaId={pizzaId} />

                </div>
            </div>
        </li>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        pizzaId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;

