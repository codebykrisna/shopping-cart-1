import { Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart";
import Home from "./pages/Home";


const App = () => {
  return (<div>
    <div className="bg-slate-900 z-50 fixed right-0 left-0 top-0">
      <Navbar/>
    </div>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/cart" element = {<Cart/>}></Route> 
    </Routes>

    </div>)
};

export default App;
