import TampilanProduk from "../views/product";
import { ProductType } from "../../types/Product.type";

const ProductsComponent = (props: { products: ProductType[] }) => {
    return (
        <div>
        <h1>Halaman Produk Static</h1>
        <TampilanProduk products={props.products} />
        </div>
    );
};

export default ProductsComponent;

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/produk");
    const response: { data: ProductType[] } = await res.json();

    return {
        props: {
        products: response.data,
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
};