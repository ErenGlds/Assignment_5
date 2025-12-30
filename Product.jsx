import Card from "./Card";

const Product = ({ title, price }) => { 
    return (
        <Card>
            <h3 style={{ fontSize: "1.5em", color: "#333", margin: "0 0 8px 0" }}>{title}</h3>
            <p style={{ fontSize: "1.2em", color: "#555", margin: "0" }}>${price}</p>
        </Card>
    );
};

export default Product;