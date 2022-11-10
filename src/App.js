import "./App.css";
import { useState, useRef } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem'
import CartItems from './components/CartItems'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const count = useRef({});

  return (
    <div className="App">
      <div className="Bakery">
        <h1 style={{marginTop: 0}}>My Amazing Bakery</h1>
        <h2 style={{marginLeft: 50}}>Bakery Items</h2>
        <div className="BakeryItems">
        {bakeryData.map((item, index) => (
          <BakeryItem key={index.toString()}
          name={item.name} description={item.description} price={item.price} image={item.image}
          cart={cart} setCart={setCart}
          total={total} setTotal={setTotal}
          count={count}
          item={item} index={index}
          />))}
        </div>
      </div>
      <div className="Cart">
        <h2 style={{marginLeft: 50}}>Cart Total: ${total.toFixed(2)}</h2>
        <div className="CartItems">
          <br></br>
          <CartItems cart={cart} count={count}/>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
