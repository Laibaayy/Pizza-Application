import PropTypes from 'prop-types';
import { formatCurrency } from "../../utilities/Helper";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import Deletebutton from '../cart/Deletebutton';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const dispatch = useDispatch()

    const EachItemQuantity = useSelector(store => store.cartData.cart.find(item => item.pizzaId === id)?.quantity ?? 0)


    const isincart = EachItemQuantity > 0;
    const Addhandler = () => {
        const newitem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 2
        }
        dispatch(addItem(newitem))
    }
    return (
        <li className='flex gap-4 '>
            <img src={imageUrl} alt={name} className={`h-24 p-1 ${soldOut ? "grayscale opacity-700" : ""}`} />
            <div className='flex flex-col grow py-2'>
                <p className='font-medium'>{name}</p>
                <p className='text-sm italic capitalize text-stone-500'>{ingredients.join(', ')}</p>
                <div className='mt-auto flex justify-between'>
                    {!soldOut ? (
                        <p className='text-sm'>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className='text-sm text-stone-500 font-medium'>Sold out</p>
                    )}
                    {isincart && <div className='flex items-center'>
                        <UpdateItemQuantity pizzaId={id} EachItemQuantity={EachItemQuantity} />
                        <Deletebutton pizzaId={id} />
                    </div>}

                    {!soldOut && !isincart && (
                        <button
                            onClick={Addhandler}
                            className="rounded-full bg-yellow-500 p-2 font-semibold tracking-wide uppercase hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm"
                        >
                            Add To Cart
                        </button>
                    )}
                </div>
            </div>
        </li >

    );
}

MenuItem.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitPrice: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        soldOut: PropTypes.bool.isRequired,
        imageUrl: PropTypes.string.isRequired
    }).isRequired
};

export default MenuItem;

