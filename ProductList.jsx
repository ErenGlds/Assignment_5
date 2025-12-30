import Product from "./Product";

const ProductList = ({ products }) => {
    return (
        <div style=
        {{
             display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>    
            {products.map((product, index) => (
                <Product key={product.id} title={product.title} price={product.price} /> 
            ))}
        </div>
    );
};

export default ProductList;