import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./ex2-function-component/App";
import NameList from "./ex3-var-function/NameList";

const element = <h2 className="text-danger">Hello React!</h2>;
const root = ReactDom.createRoot(document.getElementById("root"));



root.render(<NameList />);
