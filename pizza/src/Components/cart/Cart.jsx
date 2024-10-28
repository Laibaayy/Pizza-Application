import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart'
import Button from '../../ui/Button';
import CartItem from "../cart/Cartitem"
import { useDispatch, useSelector } from 'react-redux';
import { clearcart } from './cartSlice';

function Cart() {
    const cart = useSelector(item => item.cartData.cart)
    const name = useSelector(store => store.Userdata.username)
    const dispath = useDispatch()
    const clearhandler = () => {
        dispath(clearcart())
    }
    if (!cart.length) return <EmptyCart />
    return (
        <div className='py-5 px-2'>
            <Link className='text-sm text-blue-500 hover:text-blue-700 hover:underline ' to="/menu">&larr; Back to menu</Link>

            <h2 className='mb-5 text-2xl font-bold'>Your cart, {name}</h2>
            <ul className='divide-y divide-stone-200 border-b mb-6'  >
                {cart.map((item, i) => (
                    <CartItem item={item} key={i} />
                ))}

            </ul>
            <div >
                <Button to="/order/new"  >Order Pizza</Button>
                {/* <Link to="/order/new">Order pizzas</Link> */}
                <button onClick={clearhandler} className='ml-3 rounded-full border-2 px-1 py-1 font-semibold tracking-wide text-stone-500 uppercase hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-stone-300 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:text-stone-800'>Clear cart</button>
            </div>

        </div>
    );
}

export default Cart;