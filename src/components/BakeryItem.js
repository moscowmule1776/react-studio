import React from 'react'

const BakeryItem = (props) => {
  const addToCart = () => {
    props.setTotal(props.total + props.price);
    if (props.cart.includes(props.item) == false) {
      props.setCart([...props.cart, props.item])
      props.count.current[props.name] = 1;
    } else {
      props.count.current[props.name] += 1;
    }
  }
  return (
    <div>
        <ul className="BakeryItem">
            <ul>
              <br></br><span><img src={props.image} style={{ width: 250}}></img></span>
              <br></br><br></br><span><code>{props.name}</code></span>
              <br></br><br></br><span><code>{props.description}</code></span>
              <br></br><br></br><span><strong><code>${props.price}</code></strong></span>
              <br></br><br></br><button onClick={addToCart} style={{padding: "0.5rem 2rem",fontSize: "25px",textAlign: "center"}}><code>Add to cart</code></button>
            </ul>
        </ul>
    </div>
  );
}

export default BakeryItem;
