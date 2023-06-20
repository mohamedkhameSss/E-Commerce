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
function App() {
  const user = true;
  const router = createBrowserRouter([
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
