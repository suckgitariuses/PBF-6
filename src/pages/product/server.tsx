import TampilanProduk from "../views/product";
import { retrieveProducts } from "../../utils/db/servicefirebase";
import { ProductType } from "../../types/Product.type";

const halamanProdukServer = (props: { products: ProductType[] }) => {
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={props.products} />
        </div>
    );
};

export default halamanProdukServer;

export async function getServerSideProps() {
    try {
        const products = await retrieveProducts("products");
        return {
            props: {
                products,
            },
        };
    } catch (error) {
        console.error("Failed to load products in getServerSideProps:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}