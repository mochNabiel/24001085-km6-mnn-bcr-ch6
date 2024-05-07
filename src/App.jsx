import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from "./redux/store";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import AddNewCar from "./pages/car/addNewCar";
import EditCar from "./pages/car/editCar";

import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Protected>
          <Navbar />
          <Container>
            <Home />
          </Container>
        </Protected>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <Container>
            <Login />
          </Container>
        </NonProtected>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <Container>
            <Register />
          </Container>
        </NonProtected>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Protected>
          <Navbar />
          <Container>
            <Profile />
          </Container>
        </Protected>
      </>
    ),
  },
  {
    path: "/addNewCar",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <AddNewCar />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/car/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <EditCar />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;
