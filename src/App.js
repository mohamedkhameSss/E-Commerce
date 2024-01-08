import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import MasterLayout from "./components/MasterLayout";
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  const router = createHashRouter([
    {
      path: "/",
      element: user ? <MasterLayout /> : <Login />,
      errorElement: <ErrorElement />,
      children: [
        { index: true, element: <Home /> },
        { path: "products/:id", element: <Product /> },
        { path: "listproducts/:cat", element: <ListProducts /> },
        { path: "card", element: <ShoppingCart /> },
        { path: "success", element: <Success /> },
      ],
    },

    { path: "login", element: <Login /> },
    { path: "signup", element: <SignUp /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
