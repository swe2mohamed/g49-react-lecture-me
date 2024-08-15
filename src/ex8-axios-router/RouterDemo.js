import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import AxiosDemo from "./AxiosDemo";
import Header from "./Header";

const RouterDemo = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/booking" element={<AxiosDemo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cancel" element={<CancelBooking />}></Route>
          <Route path="/details/:id" element={<DetailsBooking />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

//const Home = () => <h1> Home Component</h1>;
const About = () => <h1>About Component</h1>;
const CancelBooking = () => <h1>Cancel Booking Component</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
const DetailsBooking = () => 
//<h1>Details Booking Component</h1>;
{
    const params = useParams();
    return(
        <div>
            <h3>Details</h3>
            <p>Booking ID: {params.id}</p>
        </div>
    )
};
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Component</h1>
      <button
        href="#"
        className="btn  btn-outline-danger"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <button
        href="#"
        className="btn btn-outline-success"
        onClick={() => navigate("/about")}
      >
        About
      </button>
    </div>
  );
};
export default RouterDemo;
