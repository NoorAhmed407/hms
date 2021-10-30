import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Login from "./Pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterForm from "./Component/RegisterForm";

function App() {
  return (
    <div className="centerbox">
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterForm} />
        {/* <Route exact path="/home" component={} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
