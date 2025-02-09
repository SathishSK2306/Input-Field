import { useState } from "react";
import "./index.css"; 

const NumberChecker = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (!/^-?\d*$/.test(value)) return; 

    setInputValue(value);

    const num = parseInt(value, 10);

    if (isNaN(num)) {
      setMessage("");
      return;
    }

    if (num < 0) {
      setMessage("❌ Enter a positive value");
    } else if (num % 2 === 0) {
      setMessage(`✅ Next 3 even numbers: ${num + 2}, ${num + 4}, ${num + 6}`);
    } else {
      setMessage(`✅ Next 3 odd numbers: ${num + 2}, ${num + 4}, ${num + 6}`);
    }
  };

  return (
    <div className="container">
      <h2>Number Input Checker</h2>
      <input
        type="Number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
        className="input-field"
      />
      <p className="message">{message}</p>
    </div>
  );
};

export default NumberChecker;
