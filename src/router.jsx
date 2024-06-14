import Home from "../pages/home/Home";
import Products from "../pages/products/Products.jsx";
import About from "../pages/about/About.jsx";
import Delivery from "../pages/delivery/Delivery.jsx";
import FeedBack from "../pages/feedback/FeedBackPage.jsx";
import CardPage from "../pages/cardPage/CardPage.jsx";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/feedback",
    element: <FeedBack />,
  },
  {
    path: "/card",
    element: <CardPage />,
  },
];
