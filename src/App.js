import { useState } from "react";
import "./styles.css";

export default function App() {
  const [purchase, setPurchase] = useState();
  const [qty, setQty] = useState();
  const [currPrice, setCurrPrice] = useState();
  const [output, setOutput] = useState();

  function clickHandler() {
    calcStock();
  }

  function calcStock() {
    let SP = Number(purchase);
    let Quantity = Number(qty);
    let CP = Number(currPrice);
    if (SP > CP) {
      const loss = (SP - CP) * Quantity;
      const lossProfit = ((SP - CP) * 100) / SP;
      setOutput();
      setOutput(
        "You're loss is " +
          loss +
          " You're loss Percentage is " +
          lossProfit +
          "%"
      );
    } else if (CP > SP) {
      const profit = (CP - SP) * Quantity;
      const profitPercentage = ((CP - SP) * 100) / SP;
      setOutput();
      setOutput(
        "You're Profit is " +
          profit +
          " You're Profit Percentage is " +
          profitPercentage +
          "%"
      );
    } else {
      setOutput("Plase Enter A Valid Number");
    }
  }

  function purchasePrice(e) {
    setPurchase(e.target.value);
  }

  function stockQuantity(e) {
    setQty(e.target.value);
  }

  function currentPrice(e) {
    setCurrPrice(e.target.value);
  }

  return (
    <div className="App">
      <h1>Stock : Check Profit OR Loss</h1>
      <label>Enter Purchase Price: </label>
      <input onChange={purchasePrice} type="number" />
      <label>Stock Quantity: </label>
      <input onChange={stockQuantity} type="number" />
      <label>Enter Current Price: </label>
      <input onChange={currentPrice} type="number" />
      <button onClick={clickHandler}>Tell Me!!</button>
      <div className="output">{output}</div>
    </div>
  );
}
