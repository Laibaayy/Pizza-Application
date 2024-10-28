import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu, { loader as menuloader } from "./Components/menu/Menu"
import Applayout from "./ui/Applayout"
import Cart from "./Components/cart/Cart"
import Error from "./ui/Error"
import CreateOrder, { action as createOrderAction } from "./Components/order/CreateOrder"
import Order, { loader as orderloader } from "./Components/order/Order"

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuloader,
        errorElement: <Error />,

      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderloader,
      },
    ]
  }

])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App