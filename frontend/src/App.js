import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import InvoiceScreen from "./screens/InvoiceScreen";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(false)}></Navbar>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <PrivateRoute exact path="/invoice" component={InvoiceScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
