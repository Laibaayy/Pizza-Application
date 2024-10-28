// Test ID: IIDSAT
import OrderItem from "./Orderitem"
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utilities/Helper";

function Order() {
    const order = useLoaderData()
    console.log(order);

    // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (

        <div className="px-3 py-2 space-y-8">

            <div>


                <div className="flex items-center justify-between" >
                    <p className="text-xl font-semibold">Order {id} Status</p>
                    <div className="flex gap-3">

                        {priority && <span className="tracking-wide font-semibold text-lg rounded-full bg-red-500 text-red-50 p-2">Priority </span>}
                        <span className="tracking-wide font-semibold text-lg rounded-full bg-green-500 text-red-50 p-2"> {status} order</span>
                    </div>
                </div>
            </div>
            <div className=" flex gap-28 bg-stone-200 justify-between pr-5 px-1 py-4 items-center">
                <p className="font-medium">
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>
            <ul className="divide-stone-200 divide-y border-b border-t">
                {cart.map((item, index) => { return <OrderItem item={item} key={index} /> })}
            </ul>

            <div className=" bg-stone-200 font-medium text-stone-600">
                <p className="font-semibold">Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
                <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
            </div>
        </div>
    );
}

export async function loader({ params }) {
    const data = await getOrder(params.orderId)
    return data
}

export default Order;