const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </div>
  );
};

export default Card;