import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const handleToggle = () => {
    setShowProducts(!showProducts);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1 style={{ color: "#1a1a2e", marginBottom: "24px" }}>
        React Product Dashboard
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleToggle}
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#4a90a4",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {showProducts ? "Hide Products" : "Show Products"}
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{
            padding: "10px 14px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "250px",
          }}
        />
      </div>

      <p style={{ color: "#333", fontSize: "16px" }}>
        Hello, {name || "Guest"}
      </p>

      {showProducts && <ProductList />}
    </div>
  );
};

export default App;