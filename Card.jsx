const Card = ({Children})   => {
    return (
    <div style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "12px",
        backgroundColor: "#ffffffff"
    }
    }>
            {Children}
            </div>
            );
};

export default Card;
