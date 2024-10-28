import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
    const cartItemsOverviewQuantity = useSelector((state) =>
        state.cartData.cart.reduce((sum, item) => sum + item.quantity, 0)
    );
    const cartItemsOverviewPrices = useSelector((state) =>
        state.cartData.cart.reduce((sum, item) => sum + item.totalPrice, 0)
    );
    if (!cartItemsOverviewQuantity) return null;
    return (
        <div className="bg-stone-800 uppercase p-4 " >
            <div className="text-stone-200 flex justify-between items-center">
                <p className="font-semibold space-x-4">
                    <span>{cartItemsOverviewQuantity}</span>
                    <span>${cartItemsOverviewPrices}</span>
                </p>
                <Link to="/cart">Open cart &rarr;</Link>

            </div>
        </div>
    );
}

export default CartOverview;