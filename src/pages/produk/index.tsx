import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import TampilanProduk from "../views/product";
import { retrieveProducts } from "../../utils/db/servicefirebase";
import { ProductType } from "../../types/Product.type";

const ProdukPage = ({ products }: { products: ProductType[] }) => {
    return (
        <div>
            <TampilanProduk products={products} basePath="/produk" />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const products = await retrieveProducts("products");
        return {
            props: {
                products,
            },
        };
    } catch (error) {
        return {
            props: {
                products: [],
            },
        };
    }
};

export default ProdukPage;
