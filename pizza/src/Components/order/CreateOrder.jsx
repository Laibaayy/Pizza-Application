
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import EmptyCart from "../cart/EmptyCart"
import { createOrder } from "../../services/apiRestaurant";
import store from "../../../store"
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../cart/cartSlice";
import { useState } from "react";
import { fetchAddress } from "../user/UserSlice";

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    const phoneFormat = useActionData()
    console.log(phoneFormat);
    const navigating = useNavigation()
    const isSubmitting = navigating.state === "submitting"
    const cart = useSelector(store => store.cartData.cart)
    const name = useSelector(store => store.Userdata.username)
    const { status: addressStatus, position, address, error: errorAddress } = useSelector(store => store.Userdata)


    const isLoadingAddress = addressStatus === "loading"

    const price = useSelector((state) =>
        state.cartData.cart.reduce((sum, item) => sum + item.totalPrice, 0)
    );
    const dispatch = useDispatch()
    console.log(price);
    const PriorityPrice = withPriority ? price + (price * 0.2) : 0
    if (!cart.length) return <EmptyCart />




    return (
        <div className="px-4 py-6">

            <h2 className="text-xl font-semibold mb-5">Ready to order? Lets go!</h2>

            <Form method="POST" action="/order/new">
                <div className="mb-3">
                    <label className="mb-4">First Name</label>
                    <input type="text" name="customer" defaultValue={name} required className="input" />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required className="input" />
                    </div>
                    {phoneFormat?.phone && <p className="mt-2 bg-red-100 rounded-md p-2 text-red-700">{phoneFormat.phone}</p>}
                </div>

                <div>
                    <label>Address</label>

                    <div className="mb-10">
                        <input type="text" name="address" required className="input" disabled={isLoadingAddress} defaultValue={address} />
                        {!position.latitude && !position.longitude && (<button disabled={isLoadingAddress} onClick={(e) => { e.preventDefault(); dispatch(fetchAddress()) }} >Geolocation</button>)}
                        {addressStatus === "error" && <p className="mt-2 bg-red-100 rounded-md p-2 text-red-700">{errorAddress}</p>}
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <input
                        className="h-6 w-6 accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 "
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">Want to yo give your order priority?</label>
                </div>

                <div>
                    <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                    <input type="hidden" name="position" value={position.latitude && position.longitude ? `${position.latitude},${position.longitude}` : ""} />
                    <Button disabled={isSubmitting}>{isSubmitting ? `Placing Order` : `Order Now ${withPriority ? PriorityPrice : price}`}</Button>
                </div>
            </Form >
        </div >
    );
}



export async function action({ request }) {
    const data = await request.formData()
    const dataa = Object.fromEntries(data);
    const order = {
        ...dataa,
        cart: JSON.parse(dataa.cart),
        // priority: dataa.priority === "on",
        priority: dataa.priority === "true",
    }
    console.log(order);
    const error = {}
    if (!isValidPhone(order.phone))
        error.phone = "Please provide Correct info , we may need to contact you !!!"
    if (Object.keys(error).length > 0) return error

    const neworder = await createOrder(order)
    //usedispatch function m wrd nhi krta..only in component is liya pora store import kr k dispatch kiya h 
    store.dispatch(clearcart())
    return redirect(`/order/${neworder.id}`)   //using redirect rather than navigate because hooks works in component not in func redirect  can take us to another page by making some kind of request


}

export default CreateOrder;