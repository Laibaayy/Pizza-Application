import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div className='py-2 px-3'>
            <Link className='text-sm text-blue-500 hover:text-blue-700 hover:underline ' to="/menu">&larr; Back to menu</Link>
            <p className='py-5'>Your cart is still empty. Start adding some pizzas :)</p>
        </div>
    );
}

export default EmptyCart;