import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./ex4-props/App";
import { Home } from "./ex5-state/Home";
import Counter from "./ex5-state/Counter";
//import App from "./ex2-function-component/App";
//import NameLt from "./ex4-props/NameLt";

const element = <h2 className="text-danger">Hello React!</h2>;
const root = ReactDom.createRoot(document.getElementById("root"));

const list = ["Negar Bah", "Merhrdad Jav", "Simon Fo"];
// root.render(<NameLt list={list}/>)
// root.render(<App />);
root.render(<Counter />)
