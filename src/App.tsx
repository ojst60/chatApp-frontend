//Components
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  RouteObject,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

//Pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  const routes: RouteObject[] = createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
    </>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
