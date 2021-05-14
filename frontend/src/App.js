import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//screens
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(false)}></Navbar>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
