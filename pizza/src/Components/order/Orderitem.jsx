import { formatCurrency } from "../../utilities/Helper";
import PropTypes from 'prop-types';

function OrderItem({ item }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="py-3">
            <div className="flex items-center justify-between text-sm gap-4">
                <p>
                    <span className="font-bold">{quantity}&times;</span> {name}
                </p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    );
}
OrderItem.propTypes = {
    item: PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        totalPrice: PropTypes.number.isRequired,
    }).isRequired,
    isLoadingIngredients: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.string),
};




export default OrderItem;