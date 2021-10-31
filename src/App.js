import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Login from "./Pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterForm from "./Component/RegisterForm";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="centerbox">
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
